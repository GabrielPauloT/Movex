import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';
import { Link } from '@/i18n/routing';

const TRUCK_IMAGES = [
  '/trucks/truck-4_5t.png',
  '/trucks/truck-8t.png',
  '/trucks/truck-12t.png',
  '/trucks/truck-16t.png',
];

const TRUCK_KEYS = ['4_5T', '8T', '12T', '16T'] as const;

export default function Pricing() {
  const t = useTranslations('Pricing');

  const trucks = TRUCK_KEYS.map((key, index) => ({
    key,
    name: t(`trucks.${key}.name`),
    volume: t(`trucks.${key}.volume`),
    price: t(`trucks.${key}.price`),
    ideal: t(`trucks.${key}.ideal`),
    image: TRUCK_IMAGES[index],
    popular: key === '8T',
  }));

  return (
    <section className="py-20 lg:py-24 bg-gray-50" id="pricing">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">{t('sectionTitle')}</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t('description')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trucks.map((truck, index) => (
            <FadeIn
              key={truck.key}
              delay={index * 100}
              direction="up"
            >
              <div
                className={cn(
                  "bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 relative h-full flex flex-col",
                  truck.popular
                    ? "border-primary shadow-xl"
                    : "border-gray-200 hover:border-primary/50 hover:shadow-lg"
                )}
              >
                {truck.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-primary-light text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {t('mostPopular')}
                  </div>
                )}

                {/* Image Section */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-xl font-black text-white mb-0.5">{truck.name}</h3>
                    <p className="text-sm text-white/90 font-medium">{truck.volume}</p>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-baseline mb-1">
                    <span className="text-sm text-gray-500 font-medium mr-1">From</span>
                    <span className="text-4xl font-black text-primary tracking-tight">${truck.price}</span>
                    <span className="text-base text-gray-500 font-medium ml-1">/h</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">+ GST</p>

                  <p className="text-sm text-gray-600 mb-6 flex-grow">{truck.ideal}</p>

                  <Link href="/pricing" className="block">
                    <Button
                      variant={truck.popular ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {t('learnMore')}
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={300}>
          <div className="mt-12 text-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              {t('viewDetailed')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
