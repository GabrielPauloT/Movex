'use client';

import { useEffect, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function CountUp({ end, duration = 2000, prefix = '', suffix = '', className }: CountUpProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Ease out quartic
            const ease = 1 - Math.pow(1 - progress, 4);

            setCount(Math.round(ease * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return (
        <span className={className}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}
