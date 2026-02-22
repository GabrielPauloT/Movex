'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { quoteFormSchema, type QuoteFormErrors } from '@/lib/schemas/quoteForm';
import { submitQuote } from '@/lib/api/submitQuote';

const CITIES = ['Melbourne', 'Sydney', 'Canberra', 'Adelaide'];

export default function QuoteCalculator() {
  const t = useTranslations('QuoteCalculator');

  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inventory, setInventory] = useState('');

  const [fieldErrors, setFieldErrors] = useState<QuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const getErrorMessage = (errorKey: string): string => {
    const errorMap: Record<string, string> = {
      required: t('errors.required'),
      sameCity: t('errors.sameCity'),
      invalidPhone: t('errors.invalidPhone'),
      invalidEmail: t('errors.invalidEmail'),
    };
    return errorMap[errorKey] || errorKey;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setSubmitError('');
    setSubmitSuccess(false);

    const formData = { name, from, to, date, phone, email, inventory };

    const result = quoteFormSchema.safeParse(formData);

    if (!result.success) {
      const errors: QuoteFormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof QuoteFormErrors;
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitQuote(result.data);
      setSubmitSuccess(true);
      setName('');
      setFrom('');
      setTo('');
      setDate('');
      setPhone('');
      setEmail('');
      setInventory('');
    } catch {
      setSubmitError(t('errors.submitFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof QuoteFormErrors) =>
    cn(
      'w-full px-4 py-3 border-2 rounded-md bg-white text-[0.9375rem] text-gray-900 focus:outline-none focus:ring-4 transition-all',
      fieldErrors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
        : 'border-gray-300 focus:border-primary focus:ring-primary/10'
    );

  if (submitSuccess) {
    return (
      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-xl relative z-20">
        <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-extrabold text-secondary mb-2">
            {t('success.title')}
          </h3>
          <p className="text-base text-gray-600 mb-6">
            {t('success.description')}
          </p>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setSubmitSuccess(false)}
          >
            {t('success.newQuote')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-xl relative z-20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-extrabold text-secondary mb-2">
          {t('title')}
        </h3>
        <p className="text-base text-gray-600">{t('subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-bold text-secondary tracking-tight">
            {t('labels.name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => { setName(e.target.value); setFieldErrors((p) => ({ ...p, name: undefined })); }}
            placeholder={t('placeholders.name')}
            className={inputClass('name')}
          />
          {fieldErrors.name && (
            <p className="text-red-500 text-xs font-medium">{getErrorMessage(fieldErrors.name)}</p>
          )}
        </div>

        {/* Leaving (From) */}
        <div className="space-y-1.5">
          <label htmlFor="from" className="block text-sm font-bold text-secondary tracking-tight">
            {t('labels.from')} <span className="text-red-500">*</span>
          </label>
          <select
            id="from"
            value={from}
            onChange={(e) => { setFrom(e.target.value); setFieldErrors((p) => ({ ...p, from: undefined })); }}
            className={inputClass('from')}
          >
            <option value="">{t('placeholders.city')}</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {fieldErrors.from && (
            <p className="text-red-500 text-xs font-medium">{getErrorMessage(fieldErrors.from)}</p>
          )}
        </div>

        {/* Going to (To) */}
        <div className="space-y-1.5">
          <label htmlFor="to" className="block text-sm font-bold text-secondary tracking-tight">
            {t('labels.to')} <span className="text-red-500">*</span>
          </label>
          <select
            id="to"
            value={to}
            onChange={(e) => { setTo(e.target.value); setFieldErrors((p) => ({ ...p, to: undefined })); }}
            className={inputClass('to')}
          >
            <option value="">{t('placeholders.city')}</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {fieldErrors.to && (
            <p className="text-red-500 text-xs font-medium">{getErrorMessage(fieldErrors.to)}</p>
          )}
        </div>

        {/* Preferred Date */}
        <div className="space-y-1.5">
          <label htmlFor="date" className="block text-sm font-bold text-secondary tracking-tight">
            {t('labels.date')} <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="date"
            min={new Date().toISOString().split('T')[0]}
            value={date}
            onChange={(e) => { setDate(e.target.value); setFieldErrors((p) => ({ ...p, date: undefined })); }}
            className={inputClass('date')}
          />
          {fieldErrors.date && (
            <p className="text-red-500 text-xs font-medium">{getErrorMessage(fieldErrors.date)}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-bold text-secondary tracking-tight">
            {t('labels.phone')} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setFieldErrors((p) => ({ ...p, phone: undefined })); }}
            placeholder={t('placeholders.phone')}
            className={inputClass('phone')}
          />
          {fieldErrors.phone && (
            <p className="text-red-500 text-xs font-medium">{getErrorMessage(fieldErrors.phone)}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-bold text-secondary tracking-tight">
            {t('labels.email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: undefined })); }}
            placeholder={t('placeholders.email')}
            className={inputClass('email')}
          />
          {fieldErrors.email && (
            <p className="text-red-500 text-xs font-medium">{getErrorMessage(fieldErrors.email)}</p>
          )}
        </div>

        {/* Inventory */}
        <div className="space-y-1.5">
          <label htmlFor="inventory" className="block text-sm font-bold text-secondary tracking-tight">
            {t('labels.inventory')} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="inventory"
            rows={3}
            value={inventory}
            onChange={(e) => { setInventory(e.target.value); setFieldErrors((p) => ({ ...p, inventory: undefined })); }}
            placeholder={t('placeholders.inventory')}
            className={cn(inputClass('inventory'), 'resize-none')}
          />
          {fieldErrors.inventory && (
            <p className="text-red-500 text-xs font-medium">{getErrorMessage(fieldErrors.inventory)}</p>
          )}
        </div>

        {/* Submit Error */}
        {submitError && (
          <div className="flex items-center gap-2 text-red-600 text-sm font-medium bg-red-50 border border-red-200 rounded-md p-3">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {submitError}
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          size="lg"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? t('button.submitting') : t('button.submit')}
        </Button>
      </form>
    </div>
  );
}
