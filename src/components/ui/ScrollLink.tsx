'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { smoothScrollTo } from '@/lib/scroll';

interface ScrollLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    [key: string]: any;
}

export default function ScrollLink({ href, children, className, onClick, ...props }: ScrollLinkProps) {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (onClick) onClick(e);

        if (href.startsWith('#') || href.startsWith('/#')) {
            e.preventDefault();

            const [path, hash] = href.includes('#') ? href.split('#') : [href, ''];
            const targetId = hash;

            // Normalized check
            const currentPath = pathname === '/' ? '/' : pathname;
            const targetPath = path === '' || path === '/' ? '/' : path;

            if (currentPath === targetPath) {
                if (targetId) {
                    smoothScrollTo(targetId);
                    window.history.pushState(null, '', href);
                } else if (path === '/' && pathname === '/') {
                    // Scroll to top if just '/'
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // or use custom smooth logic
                    // Actually let's use the custom logic for consistency if needed, but 'top' usually implies 0
                    // Let's replicate the header logic for consistency
                    const startPosition = window.scrollY;
                    const distance = -startPosition;
                    const duration = 1000; // Simplified for this case or use dynamic
                    // Reusing smoothScrollTo might require "top" id? No.
                    // We can just manually scroll or update smoothScrollTo to handle 0/top?
                    // For now, let's keep it simple: if it's just home link on home page, scroll to top.

                    // Reuse the sophisticated easing from Header manually for consistency?
                    // Or better, let's make `smoothScrollTo` capable of handling "top" or we pass an element that exists at top? 
                    // Normally header is at top.
                    const element = document.body; // Body is top.
                    if (element) smoothScrollTo(element.id || 'body', 0); // Hacky.
                }

            } else {
                router.push(targetId ? `${targetPath}?scrollTo=${targetId}` : targetPath);
            }
        }
    };

    return (
        <Link href={href} className={className} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}
