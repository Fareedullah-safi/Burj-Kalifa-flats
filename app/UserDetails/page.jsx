import React, { Suspense } from 'react';
import UserDetailsClient from './ClientComponent';

export default function UserDetailsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UserDetailsClient />
        </Suspense>
    );
}
