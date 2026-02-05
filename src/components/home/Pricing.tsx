import ScrollLink from '@/components/ui/ScrollLink';
import { Check, Minus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';

export default function Pricing() {
  const t = useTranslations('Pricing');

  const packages = [
    {
      name: t('packages.essential.name'),
      subtitle: t('packages.essential.subtitle'),
      price: '1,500',
      description: t('packages.essential.description'),
      features: [
        { text: t('packages.essential.features.loading'), included: true },
        { text: t('packages.essential.features.insurance'), included: true },
        { text: t('packages.essential.features.materials'), included: true },
        { text: t('packages.essential.features.gps'), included: true },
        { text: t('packages.essential.features.packing'), included: false },
        { text: t('packages.essential.features.assembly'), included: false },
      ],
      highlight: false,
    },
    {
      name: t('packages.complete.name'),
      subtitle: t('packages.complete.subtitle'),
      price: '2,500',
      description: t('packages.complete.description'),
      features: [
        { text: t('packages.complete.features.essential'), included: true },
        { text: t('packages.complete.features.packing'), included: true },
        { text: t('packages.complete.features.insurance'), included: true },
        { text: t('packages.complete.features.assembly'), included: true },
        { text: t('packages.complete.features.storage'), included: true },
        { text: t('packages.complete.features.scheduling'), included: true },
      ],
      highlight: true,
    },
    {
      name: t('packages.premium.name'),
      subtitle: t('packages.premium.subtitle'),
      price: '4,000',
      description: t('packages.premium.description'),
      features: [
        { text: t('packages.premium.features.complete'), included: true },
        { text: t('packages.premium.features.coordinator'), included: true },
        { text: t('packages.premium.features.crating'), included: true },
        { text: t('packages.premium.features.storage'), included: true },
        { text: t('packages.premium.features.sameday'), included: true },
        { text: t('packages.premium.features.cleaning'), included: true },
      ],
      highlight: false,
    },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              direction="up"
            >
              <div
                className={cn(
                  "bg-white rounded-2xl p-8 border-2 transition-all duration-300 relative",
                  pkg.highlight
                    ? "border-primary shadow-xl scale-100 lg:scale-105 z-10"
                    : "border-gray-200 hover:border-primary/50 hover:shadow-lg"
                )}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {t('mostPopular')}
                  </div>
                )}

                <h3 className="text-2xl font-black text-secondary mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-500 font-medium mb-6">{pkg.subtitle}</p>

                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-black text-primary tracking-tight">${pkg.price}</span>
                  <span className="text-xl font-bold text-primary ml-1">+</span>
                </div>
                <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">{pkg.description}</p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={cn("flex items-start gap-3 text-sm", feature.included ? "text-gray-700" : "text-gray-400")}>
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-300 shrink-0" />
                      )}
                      <span className="font-medium">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <ScrollLink href="#quote" className="block">
                  <Button
                    variant={pkg.highlight ? 'primary' : 'secondary'}
                    className="w-full"
                    size="lg"
                  >
                    {t('getQuote')}
                  </Button>
                </ScrollLink>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
