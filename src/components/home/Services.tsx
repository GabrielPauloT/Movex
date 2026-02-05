import { useTranslations, useLocale } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('Services');
  const locale = useLocale();

  const services = [
    {
      id: 'interstate',
      number: '01',
      title: t('items.interstate.title'),
      description: t('items.interstate.description'),
    },
    {
      id: 'packing',
      number: '02',
      title: t('items.packing.title'),
      description: t('items.packing.description'),
    },
    {
      id: 'commercial',
      number: '03',
      title: t('items.commercial.title'),
      description: t('items.commercial.description'),
    },
    {
      id: 'local',
      number: '04',
      title: t('items.local.title'),
      description: t('items.local.description'),
    },
    {
      id: 'storage',
      number: '05',
      title: t('items.storage.title'),
      description: t('items.storage.description'),
    },
    {
      id: 'specialty',
      number: '06',
      title: t('items.specialty.title'),
      description: t('items.specialty.description'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white" id="services">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">{t('sectionTitle')}</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t('description')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn
              key={index}
              delay={index * 50}
              direction="up"
              className="h-full"
            >
              <Link href={`/${locale}/services/${service.id}`} className="block h-full">
                <div
                  className="group h-full bg-white p-8 rounded-xl border-2 border-gray-100 relative overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  {/* Hover Line Effect */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary-light scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-black text-sm mb-6 ml-2">
                    {service.number}
                  </div>

                  <div className="ml-2">
                    <h3 className="text-xl font-extrabold text-secondary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-[0.9375rem] text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
