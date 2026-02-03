import { Calculator, Package, Truck, Home } from 'lucide-react';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';

export default function Process() {
  const t = useTranslations('Process');

  const steps = [
    {
      icon: Calculator,
      step: '1',
      title: t('steps.quote.title'),
      description: t('steps.quote.description'),
    },
    {
      icon: Package,
      step: '2',
      title: t('steps.pack.title'),
      description: t('steps.pack.description'),
    },
    {
      icon: Truck,
      step: '3',
      title: t('steps.transport.title'),
      description: t('steps.transport.description'),
    },
    {
      icon: Home,
      step: '4',
      title: t('steps.delivery.title'),
      description: t('steps.delivery.description'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50" id="process">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">{t('sectionTitle')}</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t('description')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              direction="up"
              className="relative text-center group"
            >
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                  <div className="absolute right-0 -top-1.5 text-gray-200 text-2xl">→</div>
                </div>
              )}

              <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black text-primary">{item.step}</span>
              </div>

              <h3 className="text-lg font-extrabold text-secondary mb-2">{item.title}</h3>
              <p className="text-[0.9375rem] text-gray-600 leading-relaxed px-4">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
