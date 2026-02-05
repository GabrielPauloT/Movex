import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';

export default function StatsBar({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const t = useTranslations('StatsBar');
  const stats = [
    { number: '15+', label: t('years') },
    { number: '6,000+', label: t('moves') },
    { number: '100%', label: t('insured') },
    { number: `${rating}★`, label: t('rating') },
  ];

  return (
    <section className="bg-secondary text-white py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              direction="up"
              className="flex flex-col items-center"
            >
              <div className="text-[3rem] lg:text-[3.5rem] font-black text-primary leading-none mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-base lg:text-lg font-semibold opacity-90">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
