<?php


namespace App\Enums;


enum OrderStatus:string
{
    case Pending = 'pending';
    case Processing = 'processing';
    case OnHold = 'on-hold';
    case Shipped = 'shipped';
    case Completed = 'completed';
    case Cancelled = 'cancelled';
    case Returned = 'returned';
    case Refunded = 'refunded';
    case Failed = 'failed';
    case CancelRequest = 'cancel-request';

    public function label() {
        return match($this) {
            self::Pending => 'Pending',
            self::Processing => 'Processing',
            self::OnHold => 'On Hold',
            self::Shipped => 'Shipped',
            self::Completed => 'Completed',
            self::Cancelled => 'Cancelled',
            self::Refunded => 'Refunded',
            self::Returned => 'Returned',
            self::Failed => 'Failed',
            self::CancelRequest => 'cancel request',
        };
    }
}
