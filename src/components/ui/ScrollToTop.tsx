'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={cn(
                "fixed bottom-28 right-8 z-40 transition-all duration-300 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            )}
        >
            <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-white border-2 border-primary text-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6 stroke-[3] group-hover:animate-bounce" />
            </button>
        </div>
    );
}
