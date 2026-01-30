'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { smoothScrollTo } from '@/lib/scroll';

function ScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const scrollTo = searchParams.get('scrollTo');
        if (scrollTo) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                smoothScrollTo(scrollTo);
            }, 100);

            // Clean up the URL without a full reload
            const newUrl = window.location.pathname;
            window.history.replaceState({}, '', newUrl);
        }
    }, [searchParams]);

    return null;
}

export default function ScrollOrchestrator() {
    return (
        <Suspense fallback={null}>
            <ScrollHandler />
        </Suspense>
    );
}
