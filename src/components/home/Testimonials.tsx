import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';

export default function Testimonials() {
  const t = useTranslations('Testimonials');
  const items = t.raw('items') as Array<{ text: string; author: string; location: string }>;

  // Calculate initials from author name if needed, or pass it in JSON. 
  // The original code had hardcoded initials. I'll derive them.
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <section className="py-20 lg:py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">{t('sectionTitle')}</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t('description')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              direction="up"
            >
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 relative h-full flex flex-col">
                <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif leading-none">&quot;</div>

                <div className="text-primary text-lg tracking-widest mb-4">★★★★★</div>

                <p className="text-[0.9375rem] text-gray-700 leading-relaxed mb-8 relative z-10 flex-grow">
                  {item.text}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-black text-sm shadow-sm flex-shrink-0">
                    {getInitials(item.author)}
                  </div>
                  <div>
                    <div className="font-extrabold text-secondary text-base">{item.author}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.location}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
