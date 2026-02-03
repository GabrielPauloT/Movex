import ScrollLink from '@/components/ui/ScrollLink';
import { Check, Shield, Star, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import QuoteCalculator from './QuoteCalculator';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  const TrustIndicators = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t-2 border-gray-200 mt-10">
      {[
        { icon: Check, value: '6,000+', label: t('trust.customers') },
        { icon: Shield, value: '100%', label: t('trust.insured') },
        { icon: Star, value: '4.9/5', label: t('trust.rating') },
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
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white" id="quote">
      {/* Decorative background circle */}
      <div className="absolute -top-1/2 -right-[20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(230,126,34,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div className="hero-content text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-[0.8125rem] font-bold text-primary mb-6 shadow-sm border-2 border-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Check className="w-4 h-4 stroke-[3]" />
              {t('trustedSince')}
            </div>

            <h1 className="text-secondary text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.2] tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              {t.rich('title', {
                primary: (chunks) => <span className="text-primary">{chunks}</span>
              })}
            </h1>

            <p className="text-xl text-gray-600 font-medium mb-3 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              {t('description')}
            </p>

            <p className="text-base text-gray-500 italic mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              {t('quote')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <ScrollLink href="#quote">
                <Button size="lg" className="w-full sm:w-auto">{t('buttons.calculate')}</Button>
              </ScrollLink>
              <a href="tel:1300480732">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
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
