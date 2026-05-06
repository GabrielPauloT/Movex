'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PHONE_TEL_HREF } from '@/data/contact';
import { smoothScrollTo } from '@/lib/scroll';

export default function MobileStickyCTA() {
  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Match the html scroll-padding-top (6rem) so the form lands at the same
    // offset the client approved when using the native anchor jump.
    smoothScrollTo('quote-form', 96);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-40 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <a href={PHONE_TEL_HREF} className="flex-1">
        <Button variant="accent" className="w-full h-12 text-base font-bold">
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </Button>
      </a>
      <a href="#quote-form" className="flex-1" onClick={handleQuoteClick}>
        <Button className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20">
          Get a Quote
        </Button>
      </a>
    </div>
  );
}
