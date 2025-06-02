import { Suspense } from 'react';
import BookingClient from '@/app/booking/BookingClient';

export default function BookingPage() {
    return (
        <Suspense fallback={<div className="text-white p-10">Loading booking page...</div>}>
            <BookingClient />
        </Suspense>
    );
}
