'use client';

import { Link, usePathname, useRouter } from '@/i18n/routing';
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
                    window.scrollTo({ top: 0, behavior: 'smooth' });
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
