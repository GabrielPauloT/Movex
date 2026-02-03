import { ShieldCheck, Users, Wallet, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';

export default function Features() {
  const t = useTranslations('Features');

  const features = [
    {
      icon: ShieldCheck,
      title: t('items.insured.title'),
      description: t('items.insured.description'),
    },
    {
      icon: Users,
      title: t('items.family.title'),
      description: t('items.family.description'),
    },
    {
      icon: Wallet,
      title: t('items.fees.title'),
      description: t('items.fees.description'),
    },
    {
      icon: MapPin,
      title: t('items.tracking.title'),
      description: t('items.tracking.description'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white" id="features">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">{t('sectionTitle')}</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t('description')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              direction="up"
              className="h-full"
            >
              <div
                className="group h-full bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-6 shadow-md group-hover:shadow-primary/30 transition-shadow flex-shrink-0">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-secondary mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-[0.9375rem] text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
