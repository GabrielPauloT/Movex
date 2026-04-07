'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Truck, Menu, X, ChevronRight, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { smoothScrollTo } from '@/lib/scroll';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/data/contact';

export default function Header() {
  const t = useTranslations('Header');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.howItWorks'), href: '/#process' },
    { name: t('nav.pricing'), href: '/#pricing' },
    { name: t('nav.volumeCalculator'), href: '/volume-calculator' },
    { name: t('nav.reviews'), href: '/#testimonials' },
    { name: t('nav.contact'), href: '/#contact' },
  ];

  const mobileNavigation = [
    ...navigation,
    { name: t('nav.about'), href: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 100 && pathname === '/') {
        setActiveSection('');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Sort entries so navigation items are processed last
      // This ensures that if both a section and a non-nav element (like features) 
      // intersect at the same time, the navigation item wins
      const sortedEntries = [...entries].sort((a, b) => {
        const aIsNav = navigation.some(n => n.href === `/#${a.target.id}`);
        const bIsNav = navigation.some(n => n.href === `/#${b.target.id}`);
        if (aIsNav && !bIsNav) return 1;
        if (!aIsNav && bIsNav) return -1;
        return 0;
      });

      sortedEntries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0
    });

    // Observe non-nav sections to clear active state
    // We observe these FIRST so they are processed earlier if unordered,
    // though the sort above guarantees precedence.
    ['quote', 'features'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    navigation.forEach((item) => {
      if (item.href.startsWith('/#')) {
        const id = item.href.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => observer.disconnect();
  }, [pathname, navigation]);

  const isActive = (item: typeof navigation[0]) => {
    if (item.href === pathname) return true;
    if (pathname === '/' && item.href.startsWith('/#')) {
      const id = item.href.replace('/#', '');
      return activeSection === id;
    }
    return false;
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Handle Logo/Home click specially
    if (href === '/') {
      if (pathname === '/') {
        const startPosition = window.scrollY;
        const distance = -startPosition; // target is 0
        const absDistance = Math.abs(distance);
        const duration = Math.min(Math.max(absDistance * 0.3, 500), 1000);

        let start: number | null = null;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const ease = (t: number) => 1 - Math.pow(1 - t, 4);
          const percentage = Math.min(progress / duration, 1);

          window.scrollTo({ top: startPosition + distance * ease(percentage), behavior: 'auto' });
          if (progress < duration) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
        window.history.pushState(null, '', '/');
        setActiveSection('');
      } else {
        router.push('/');
      }
      return;
    }

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetId = hash;

      // Check if we're on the target page already
      // Normalized check: pathname '/' is same as path '' or '/'
      const currentPath = pathname === '/' ? '/' : pathname;
      const targetPath = path === '' || path === '/' ? '/' : path;

      if (currentPath === targetPath) {
        smoothScrollTo(targetId);
        window.history.pushState(null, '', href);
        setActiveSection(targetId);
      } else {
        // Navigate to new page with instruction to scroll
        router.push(`${targetPath}?scrollTo=${targetId}`);
      }
    } else {
      // Standard navigation
      router.push(href);
    }
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 transition-all duration-300',
          isScrolled ? 'shadow-md py-2' : 'py-4'
        )}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group" onClick={(e) => handleScroll(e, '/')}>
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-md flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all">
              {/* <Truck className="w-6 h-6" /> */}
              <Image src="/logo/logo-header.png" alt="Logo" width={48} height={26} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg xl:text-xl text-secondary leading-none tracking-tight">MOVERX SOLUTIONS</span>
              <span className="text-xs text-gray-600 font-semibold tracking-wider">{t('tagline')}</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    'text-[0.8125rem] xl:text-[0.9375rem] font-semibold transition-colors hover:text-primary whitespace-nowrap',
                    isActive(item) ? 'text-primary' : 'text-gray-700'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/#quote" onClick={(e) => handleScroll(e, '/#quote')}>
              <Button>{t('getQuote')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer — rendered outside header to avoid sticky/overflow issues */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="font-black text-lg text-secondary tracking-tight">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-4">
              {mobileNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-6 py-4 text-base font-semibold transition-colors hover:bg-primary/5 hover:text-primary",
                    isActive(item) ? "text-primary bg-primary/5 border-r-4 border-primary" : "text-gray-700"
                  )}
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 space-y-3 flex flex-col">
              <Link href="/#quote" onClick={(e) => handleScroll(e, '/#quote')}>
                <Button className="w-full h-12 text-base">{t('getQuote')}</Button>
              </Link>
              <a href={PHONE_TEL_HREF} className="block">
                <Button variant="outline" className="w-full h-12 text-base border-2">
                  <Phone className="w-4 h-4 mr-2" />
                  {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
