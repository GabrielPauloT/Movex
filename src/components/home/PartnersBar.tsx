import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';

const PARTNERS = [
  { name: 'Dominion Group', logo: '/partners/partners-1.png' },
  { name: 'RP Global Logistics', logo: '/partners/partners-2.png' },
];

export default function PartnersBar() {
  const t = useTranslations('PartnersBar');

  return (
    <section className="bg-primary py-8 lg:py-10">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <p className="text-center text-white/70 text-sm font-semibold uppercase tracking-widest mb-6">
            {t('title')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="flex items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 lg:h-16 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
