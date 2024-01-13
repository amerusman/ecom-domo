var urlReg = '/reg.aspx';

function getRandomInteger(t, e) {
     return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var cid = getParameterByName('c') ? getParameterByName('c') : '', cidP = "&cid=" + cid;
var aid = getParameterByName('a') ? getParameterByName('a') : '', aidP = "&aid=" + aid;

document.addEventListener("DOMContentLoaded", () => {

    var allProductItems = document.querySelectorAll(".product-item");

    if (allProductItems && allProductItems.length) {
        allProductItems.forEach((function (e, i) {
            var n = e.querySelector(".last-sale span");
            if (i === 0) {
                n.innerText = getRandomInteger(10, 24) + " hours";
            } else if (i === 1) {
                n.innerText = getRandomInteger(2, 35) + " sec";
            } else if (i === 2) {
                n.innerText = getRandomInteger(3, 60) + " min";
            }
        }));
    }

    let paramsUTM = window.location.search.substring(1);
    if (paramsUTM) {
        document.cookie = "utm =" + JSON.stringify(decodeURI(paramsUTM));
    }

})
