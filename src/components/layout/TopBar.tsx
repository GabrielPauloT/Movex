import { Link } from '@/i18n/routing';
import { Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TopBar() {
  const t = useTranslations('TopBar');

  return (
    <div className="bg-primary text-white py-2 text-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="hidden sm:flex gap-8 items-center">
          <Link href="/resources" className="hover:opacity-80 transition-opacity font-medium">{t('resources')}</Link>
          <Link href="/support" className="hover:opacity-80 transition-opacity font-medium">{t('support')}</Link>
          <Link href="/payment" className="hover:opacity-80 transition-opacity font-medium">{t('payment')}</Link>
        </div>
        <div className="flex items-center gap-2 font-semibold ml-auto sm:ml-0">
          <Phone className="w-4 h-4 fill-current" />
          <span>1300 480 732</span>
        </div>
      </div>
    </div>
  );
}
