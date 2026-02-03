'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';

export default function FAQ() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = t.raw('items') as Array<{ question: string; answer: string }>;

  return (
    <section className="py-20 lg:py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">{t('sectionTitle')}</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">{t('title')}</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t('description')}
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn
              key={index}
              delay={index * 50}
              direction="up"
            >
              <div
                className={cn(
                  "bg-white border-2 rounded-xl overflow-hidden transition-all duration-300",
                  openIndex === index ? "border-primary shadow-md" : "border-gray-200 hover:border-gray-300"
                )}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-bold text-secondary pr-8">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                    openIndex === index ? "bg-primary text-white rotate-45" : "bg-primary text-white"
                  )}>
                    <Plus className="w-5 h-5" />
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500 ease-in-out",
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-[0.9375rem] text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2 mx-6 border-0">
                      {faq.answer}
                    </div>
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
