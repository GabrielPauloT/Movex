import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 text-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="hidden sm:flex gap-8 items-center">
          <Link href="/resources" className="hover:opacity-80 transition-opacity font-medium">Resources</Link>
          <Link href="/support" className="hover:opacity-80 transition-opacity font-medium">Support</Link>
          <Link href="/payment" className="hover:opacity-80 transition-opacity font-medium">Make a Payment</Link>
        </div>
        <div className="flex items-center gap-2 font-semibold ml-auto sm:ml-0">
          <Phone className="w-4 h-4 fill-current" />
          <span>1300 480 732</span>
        </div>
      </div>
    </div>
  );
}
