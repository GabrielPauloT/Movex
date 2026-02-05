import ScrollLink from '@/components/ui/ScrollLink';
import { Check, Shield, Star, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import QuoteCalculator from './QuoteCalculator';
import { useTranslations } from 'next-intl';

export default function Hero({ rating }: { rating: number }) {
  const t = useTranslations('Hero');

  const TrustIndicators = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t-2 border-gray-200 mt-10">
      {[
        { icon: Check, value: '6,000+', label: t('trust.customers') },
        { icon: Shield, value: '100%', label: t('trust.insured') },
        { icon: Star, value: `${rating}/5`, label: t('trust.rating') },
        { icon: Users, value: 'Family', label: t('trust.owned') },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-sm">
            <item.icon className="w-5 h-5" />
          </div>
          <strong className="block text-xl font-extrabold text-secondary mb-1">{item.value}</strong>
          <span className="text-sm text-gray-600 font-medium block">{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-white" id="quote">
      {/* Background Image with Gradient Fade */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1624821588859-96de23573a9e?auto=format&fit=crop&q=80')" }} // Family/Home vibe
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div className="hero-content text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/5 backdrop-blur-sm px-4 py-2 rounded-full text-[0.8125rem] font-bold text-secondary mb-6 shadow-sm border border-secondary/10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Check className="w-4 h-4 stroke-[3] text-primary" />
              {t('trustedSince')}
            </div>

            <h1 className="text-secondary text-[clamp(2.75rem,5.5vw,4.25rem)] font-extrabold leading-[1.1] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 drop-shadow-sm">
              {t.rich('title', {
                primary: (chunks) => <span className="text-primary relative inline-block">
                  {chunks}
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 -rotate-1 skew-x-12 rounded-full" />
                </span>
              })}
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 font-medium mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              {t('description')}
            </p>

            <p className="text-base text-gray-500 italic mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              {t('quote')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <ScrollLink href="#quote">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">{t('buttons.calculate')}</Button>
              </ScrollLink>
              <a href="tel:1300480732">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg border-2 border-transparent hover:border-secondary/10 hover:bg-white text-secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('buttons.call')}
                </Button>
              </a>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
              <TrustIndicators />
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <QuoteCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
