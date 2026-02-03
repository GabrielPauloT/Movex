'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import CountUp from '@/components/ui/CountUp';
import { useTranslations } from 'next-intl';

const CITIES = ['Melbourne', 'Sydney', 'Canberra', 'Adelaide'];

const PRICES: Record<string, number> = {
  'Melbourne-Sydney': 2200, 'Sydney-Melbourne': 2200,
  'Melbourne-Canberra': 1800, 'Canberra-Melbourne': 1800,
  'Melbourne-Adelaide': 1900, 'Adelaide-Melbourne': 1900,
  'Sydney-Canberra': 1500, 'Canberra-Sydney': 1500,
  'Sydney-Adelaide': 2400, 'Adelaide-Sydney': 2400,
  'Canberra-Adelaide': 2000, 'Adelaide-Canberra': 2000,
};

export default function QuoteCalculator() {
  const t = useTranslations('QuoteCalculator');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [size, setSize] = useState('');
  const [date, setDate] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);
  const [error, setError] = useState('');

  const SIZES = [
    { label: t('sizes.1bed'), value: '1', multiplier: 1 },
    { label: t('sizes.2bed'), value: '2', multiplier: 1.5 },
    { label: t('sizes.3bed'), value: '3', multiplier: 2 },
    { label: t('sizes.4bed'), value: '4', multiplier: 2.5 },
  ];

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setEstimate(null);

    if (!from || !to || !size || !date) {
      setError(t('errors.fields'));
      return;
    }

    if (from === to) {
      setError(t('errors.sameCity'));
      return;
    }

    const basePrice = PRICES[`${from}-${to}`] || 2000;
    const sizeMultiplier = SIZES.find(s => s.value === size)?.multiplier || 1;
    const finalPrice = Math.round(basePrice * sizeMultiplier);

    setEstimate(finalPrice);
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-xl relative z-20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-extrabold text-secondary mb-2">{t('title')}</h3>
        <p className="text-base text-gray-600">{t('subtitle')}</p>
      </div>

      <form onSubmit={calculate} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="from" className="block text-sm font-bold text-secondary tracking-tight">{t('labels.from')}</label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md bg-white text-[0.9375rem] text-gray-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
          >
            <option value="">{t('placeholders.city')}</option>
            {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="to" className="block text-sm font-bold text-secondary tracking-tight">{t('labels.to')}</label>
          <select
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md bg-white text-[0.9375rem] text-gray-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
          >
            <option value="">{t('placeholders.city')}</option>
            {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="size" className="block text-sm font-bold text-secondary tracking-tight">{t('labels.size')}</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md bg-white text-[0.9375rem] text-gray-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
          >
            <option value="">{t('placeholders.size')}</option>
            {SIZES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-bold text-secondary tracking-tight">{t('labels.date')}</label>
          <input
            type="date"
            id="date"
            min={new Date().toISOString().split('T')[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md bg-white text-[0.9375rem] text-gray-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
          />
        </div>

        {error && <div className="text-red-500 text-sm font-medium text-center">{error}</div>}

        <Button type="submit" className="w-full" size="lg">{t('button')}</Button>
      </form>

      {estimate !== null && (
        <div className="mt-6 p-8 bg-gradient-to-br from-primary to-accent rounded-xl text-center text-white animate-in fade-in zoom-in-95 duration-300">
          <div className="text-sm font-bold uppercase tracking-widest opacity-90 mb-2">{t('result.title')}</div>
          <div className="text-[3.5rem] font-black leading-none mb-5 tracking-tight">
            <CountUp end={estimate} prefix="$" duration={1500} />
          </div>
          <a href="tel:1300480732" className="block w-full">
            <Button variant="white" size="lg" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              {t('result.call')}
            </Button>
          </a>
          <div className="text-[0.8125rem] opacity-90 mt-5 pt-5 border-t border-white/30">
            {t('result.note')}
          </div>
        </div>
      )}
    </div>
  );
}
