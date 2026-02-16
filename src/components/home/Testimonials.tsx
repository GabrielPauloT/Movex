import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';
import { Review } from '@/lib/googleMaps';

export default function Testimonials({ reviews }: { reviews: Review[] }) {
  const t = useTranslations('Testimonials');

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
          {reviews.filter(review => review.rating >= 4).slice(0, 3).map((review, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              direction="up"
            >
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 relative h-full flex flex-col">
                <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif leading-none">&quot;</div>

                {/* Google Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-500">Google Review</span>
                </div>

                <div className="text-primary text-lg tracking-widest mb-4">
                  {Array(review.rating).fill('★').join('')}
                </div>

                <p className="text-[0.9375rem] text-gray-700 leading-relaxed mb-8 relative z-10 flex-grow">
                  {review.text}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-black text-sm shadow-sm flex-shrink-0">
                    {getInitials(review.author_name)}
                  </div>
                  <div>
                    <div className="font-extrabold text-secondary text-base">{review.author_name}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">{review.relative_time_description}</div>
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
