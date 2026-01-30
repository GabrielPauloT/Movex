'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 2-4 weeks in advance for interstate moves, especially during peak season (summer and end of month). However, we can often accommodate last-minute moves—just give us a call!',
  },
  {
    question: 'What insurance do you provide?',
    answer: "All our moves include comprehensive Transit and Public Liability insurance. Basic coverage is included in every package, with options for additional coverage for high-value items. We're fully licensed and insured for your peace of mind.",
  },
  {
    question: 'Can I track my belongings?',
    answer: "Yes! All interstate moves include GPS tracking. You'll receive real-time updates on your shipment's location and estimated arrival time. Our team is also available by phone for updates anytime.",
  },
  {
    question: 'What can\'t you move?',
    answer: 'For safety and legal reasons, we cannot transport hazardous materials, perishable foods, plants (interstate), pets, or illegal items. We\'re happy to advise on alternatives for plants and pets if needed.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We require a 25% deposit to secure your booking, with the balance due upon completion. We accept all major credit cards, bank transfers, and cash. Payment plans available for larger moves.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">FAQ</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">Your Questions Answered</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Have questions? We have answers. Can&apos;t find what you&apos;re looking for? Give us a call.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white border-2 rounded-xl overflow-hidden transition-all duration-300",
                openIndex === index ? "border-primary shadow-md" : "border-gray-200 hover:border-gray-300"
              )}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
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
                  "transition-all duration-300 ease-in-out overflow-hidden",
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 text-[0.9375rem] text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2 mx-6 border-0">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
