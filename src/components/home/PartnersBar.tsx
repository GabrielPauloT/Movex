import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const PARTNERS = [
  { name: 'Dominion Group', logo: '/partners/dominion-group.png', width: 484, height: 79 },
  { name: 'Find a Mover', logo: '/partners/find-a-mover.png', width: 1066, height: 525 },
  { name: 'RP Global Logistics', logo: '/partners/rp-global.png', width: 458, height: 226 },
  { name: 'Muval', logo: '/partners/muval.png', width: 896, height: 187 },
  { name: 'MovePro', logo: '/partners/movepro.png', width: 800, height: 123 },
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
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="w-36 h-14 lg:w-44 lg:h-16 bg-white rounded-lg flex items-center justify-center p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
