<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MassDestroyTranslationRequest;
use App\Http\Requests\Admin\StoreTranslationRequest;
use App\Http\Requests\Admin\UpdateTranslationRequest;
use App\Models\Language;
use App\Models\Translation;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpFoundation\Response;

class TranslationController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('translation_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $translations = Translation::all();

        return view('admin.translations.index', compact('translations'));
    }

    public function create()
    {
        abort_if(Gate::denies('translation_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.translations.create');
    }

    public function store(StoreTranslationRequest $request)
    {
        $translation = Translation::create($request->all());

        foreach(Language::all() as $lang) {
            Cache::forget(Translation::CACHE_KEY . '_' . $lang->code);
        }

        return redirect()->route('admin.translations.index');
    }

    public function edit(Translation $translation)
    {
        abort_if(Gate::denies('translation_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.translations.edit', compact('translation'));
    }

    public function update(UpdateTranslationRequest $request, Translation $translation)
    {
        $translation->update($request->all());

        foreach(Language::all() as $lang) {
            Cache::forget(Translation::CACHE_KEY . '_' . $lang->code);
        }

        return redirect()->route('admin.translations.index');
    }

    public function show(Translation $translation)
    {
        abort_if(Gate::denies('translation_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return view('admin.translations.show', compact('translation'));
    }

    public function destroy(Translation $translation)
    {
        abort_if(Gate::denies('translation_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $translation->delete();

        return back();
    }

    public function massDestroy(MassDestroyTranslationRequest $request)
    {
        Translation::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function export()
    {
        $data = [];
        $data[0] = ['id'];
        $langs = Language::all();
        foreach ($langs as $lang) {
            $data[0][] = $lang->code;
        }
        $translations = Translation::all();
        $i = 1;
        foreach ($translations as $translation)
        {
            $data[$i][] =$translation->id;
            foreach ($langs as $lang) {
                $data[$i][] = trim($translation->getTranslation('value', $lang->code, false));
            }
            $i++;
        }


        $fileName = 'translations_' . date('Y-m-d') . '.csv';
        $dirPath = public_path(). "/files/csv";
        if (!file_exists($dirPath)) {
            mkdir($dirPath, 0755, true);
        }

        $pathToFile = $dirPath . '/' . $fileName;

        $fp = fopen($pathToFile, 'w');

        foreach ($data as $fields) {
            fputcsv($fp, $fields);
        }

        fclose($fp);

        $headers = array(
            "Content-type"        => "text/csv",
            "Content-Disposition" => "attachment; filename=$fileName",
            "Pragma"              => "no-cache",
            "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
            "Expires"             => "0"
        );
        return response()->download($pathToFile, $fileName, $headers);
    }

    public function import(Request $request)
    {
        $data = array_map('str_getcsv', file($request->file('file')));
        if ( !isset($data[0][0]) || 'id' != $data[0][0] ) {
            return back()->withErrors(['msg' => 'Wrong csv file format']);
        }
        $fields = array_shift($data);
        unset($fields[0]);
        $counter = 0;
        foreach ($data as $row)
        {
            $value = [];
            $id = $row[0];
            if(!is_numeric($id)) {
                continue;
            }
            foreach ($fields as $fid => $lang) {
                if (isset($row[$fid]) && $row[$fid]) {
                    $value[$lang] = $row[$fid];
                }
            }

            if (Translation::where('id', $id)->update(['value' => $value])) {
                $counter++;
            }
        }
        return back()->with('message', 'Successfully updated ' . $counter . ' rows');
    }
}
