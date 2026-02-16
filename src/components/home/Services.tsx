import { useTranslations, useLocale } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('Services');
  const locale = useLocale();

  const services = [
    {
      id: 'house',
      number: '01',
      title: t('items.house.title'),
      description: t('items.house.description'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'commercial',
      number: '02',
      title: t('items.commercial.title'),
      description: t('items.commercial.description'),
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'office',
      number: '03',
      title: t('items.office.title'),
      description: t('items.office.description'),
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'packing',
      number: '04',
      title: t('items.packing.title'),
      description: t('items.packing.description'),
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'storage',
      number: '05',
      title: t('items.storage.title'),
      description: t('items.storage.description'),
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'furniture',
      number: '06',
      title: t('items.furniture.title'),
      description: t('items.furniture.description'),
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600',
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
                  className="group h-full bg-white rounded-xl border-2 border-gray-100 relative overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                      {service.number}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-secondary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-[0.9375rem] text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Hover Line Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
