import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import { cn } from '@/lib/utils';

const PARTNERS = [
  { name: 'Dominion Group', logo: '/partners/dominion-group.png', width: 484, height: 79 },
  { name: 'Find a Mover', logo: '/partners/find-a-mover.png', width: 1066, height: 525 },
  { name: 'RP Global Logistics', logo: '/partners/logo-rp-global.jpeg', width: 458, height: 226 },
  { name: 'Muval', logo: '/partners/muval.png', width: 896, height: 187 },
  { name: 'MovePro', logo: '/partners/movepro.png', width: 800, height: 123 },
  { name: 'Moving24', logo: '/partners/moving24.png', width: 800, height: 800 },
  { name: 'Google', logo: '/partners/logo-google.png', width: 1542, height: 502 },
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
                className={cn(
                  "bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 w-36 h-14 lg:w-44 lg:h-16 flex items-center justify-center",
                  partner.name === 'Moving24' ? "p-0" : partner.name === 'RP Global Logistics' ? "p-1.5" : "p-3"
                )}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={cn(
                    "max-h-full object-contain rounded-sm",
                    partner.name === 'RP Global Logistics' ? "max-w-none w-full object-cover" : "max-w-full",
                    partner.name === 'Moving24' && "scale-[1.8]"
                  )}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
