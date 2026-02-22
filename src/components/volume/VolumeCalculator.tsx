'use client';

import { useState, useMemo } from 'react';
import { Search, Package, Plus, Minus, X, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CATEGORIES, ITEMS_DATA, TRUCKS, CategoryKey, VolumeItem } from '@/data/volume-items';
import { useTranslations } from 'next-intl';
import { volumeQuoteFormSchema, type VolumeQuoteFormErrors } from '@/lib/schemas/volumeQuoteForm';
import { submitVolumeQuote } from '@/lib/api/submitVolumeQuote';

export default function VolumeCalculator() {
  const t = useTranslations('VolumeCalculator');
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('bedroom');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [modalOpen, setModalOpen] = useState(false);

  // Modal form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formPickup, setFormPickup] = useState('');
  const [formDelivery, setFormDelivery] = useState('');
  const [fieldErrors, setFieldErrors] = useState<VolumeQuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Filter items based on search or category
  const displayedItems = useMemo(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const allItems: VolumeItem[] = [];
      Object.values(ITEMS_DATA).forEach(list => allItems.push(...list));
      // Filter by filtered translated name
      return allItems.filter(item => {
        const name = t(`items.${item.id}`);
        return name.toLowerCase().includes(query);
      });
    }
    return ITEMS_DATA[activeCategory];
  }, [activeCategory, searchQuery, t]);

  const updateQuantity = (itemId: string, delta: number) => {
    setSelectedItems(prev => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const totalVolume = useMemo(() => {
    let volume = 0;
    const allItems: Record<string, VolumeItem> = {};
    Object.values(ITEMS_DATA).forEach(list => list.forEach(item => allItems[item.id] = item));

    Object.entries(selectedItems).forEach(([id, qty]) => {
      if (allItems[id]) volume += allItems[id].volume * qty;
    });
    return volume;
  }, [selectedItems]);

  const totalItems = Object.values(selectedItems).reduce((a, b) => a + b, 0);

  const recommendedTruck = useMemo(() => {
    const truck = Object.values(TRUCKS).find(t => totalVolume >= t.min && totalVolume <= t.max) || TRUCKS['4T'];
    // We need the key to get the translation
    const truckKey = Object.keys(TRUCKS).find(key => TRUCKS[key as keyof typeof TRUCKS] === truck) || '4T';
    return { ...truck, key: truckKey };
  }, [totalVolume]);

  const progress = Math.min((totalVolume / 50) * 100, 100);

  // Build inventory string from selected items — each item on its own line
  const buildInventory = (): string => {
    const allItems: Record<string, VolumeItem> = {};
    Object.values(ITEMS_DATA).forEach(list => list.forEach(item => allItems[item.id] = item));

    return Object.entries(selectedItems)
      .map(([id, qty]) => {
        const name = t(`items.${id}`);
        return `${qty}x ${name}`;
      })
      .join('\n');
  };

  const getErrorMessage = (errorKey: string): string => {
    const errorMap: Record<string, string> = {
      required: t('modal.errors.required'),
      invalidPhone: t('modal.errors.invalidPhone'),
      invalidEmail: t('modal.errors.invalidEmail'),
    };
    return errorMap[errorKey] || errorKey;
  };

  const handleModalOpen = () => {
    setSubmitSuccess(false);
    setSubmitError('');
    setFieldErrors({});
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSubmitError('');
    setFieldErrors({});
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setSubmitError('');

    const inventory = buildInventory();
    const formData = {
      name: formName,
      email: formEmail,
      phone: formPhone,
      date: formDate,
      pickup: formPickup,
      delivery: formDelivery,
      inventory,
    };

    const result = volumeQuoteFormSchema.safeParse(formData);

    if (!result.success) {
      const errors: VolumeQuoteFormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof VolumeQuoteFormErrors;
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitVolumeQuote(result.data);
      setSubmitSuccess(true);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormDate('');
      setFormPickup('');
      setFormDelivery('');
    } catch {
      setSubmitError(t('modal.errors.submitFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalInputClass = (field: keyof VolumeQuoteFormErrors) =>
    cn(
      'w-full px-4 py-2 border-2 rounded-md text-gray-900 focus:outline-none transition-all',
      fieldErrors[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-gray-200 focus:border-primary'
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
      {/* Main Calculator Area */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-br from-secondary to-secondary-light text-white p-8 text-center">
          <h1 className="text-3xl font-black mb-2 tracking-tight">{t('title')}</h1>
          <p className="opacity-90 text-base">{t('subtitle')}</p>

          <div className="h-1.5 bg-white/20 rounded-full mt-6 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
            />
          </div>
        </div>

        {/* Categories (only show if not searching) */}
        {!searchQuery && (
          <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50/50 pb-0.5 scrollbar-hide">
            {Object.entries(CATEGORIES).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as CategoryKey)}
                className={cn(
                  "px-6 py-4 whitespace-nowrap font-bold text-[0.9375rem] transition-colors relative",
                  activeCategory === key
                    ? "text-primary bg-white border-b-2 border-primary"
                    : "text-gray-600 hover:text-primary hover:bg-white"
                )}
              >
                {t(`categories.${key}`)}
                {/* Badge for category count */}
                {(() => {
                  const catItems = ITEMS_DATA[key as CategoryKey].map(i => i.id);
                  const count = catItems.reduce((acc, id) => acc + (selectedItems[id] || 0), 0);
                  if (count > 0) {
                    return (
                      <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    );
                  }
                  return null;
                })()}
              </button>
            ))}
          </div>
        )}

        {/* Items Grid */}
        <div className="p-6 min-h-[400px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "p-4 rounded-xl border-2 text-center transition-all cursor-pointer group hover:-translate-y-0.5",
                  selectedItems[item.id]
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-gray-100 hover:border-primary/50 hover:shadow-md bg-white"
                )}
                onClick={() => updateQuantity(item.id, 1)}
              >
                <div className={cn(
                  "text-4xl mb-3 transition-transform duration-200",
                  selectedItems[item.id] ? "scale-110 grayscale-0" : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                )}>
                  {item.icon}
                </div>
                <div className="font-bold text-sm text-gray-900 mb-1 leading-tight">{t(`items.${item.id}`)}</div>
                <div className="text-xs text-gray-500 font-medium">{item.volume} m³</div>

                {selectedItems[item.id] ? (
                  <div className="flex items-center justify-center gap-3 mt-3 animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-extrabold text-primary text-lg w-4 text-center">{selectedItems[item.id]}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="h-11 mt-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold text-sm">
                    {t('items.add')}
                  </div>
                )}
              </div>
            ))}
          </div>
          {displayedItems.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              {t('search.noResults', { query: searchQuery })}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Summary */}
      <div className="lg:sticky lg:top-24 space-y-6">
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-secondary p-6 text-white text-center">
            <h2 className="text-xl font-extrabold mb-1">{t('summary.title')}</h2>
            <p className="opacity-80 text-sm">{t('summary.itemsSelected', { count: totalItems })}</p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-light p-8 text-center text-white">
            <div className="text-sm font-bold uppercase tracking-widest opacity-90 mb-2">{t('summary.totalVolume')}</div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-black tracking-tight">{totalVolume.toFixed(1)}</span>
              <span className="text-xl font-bold">m³</span>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="bg-white border-2 border-primary rounded-xl p-6 text-center shadow-sm relative overflow-hidden">
              <div className="text-5xl mb-4">{recommendedTruck.icon}</div>
              <h3 className="text-xl font-black text-secondary mb-1">{recommendedTruck.name}</h3>
              <div className="text-sm font-medium text-gray-600 mb-2">{recommendedTruck.capacity} m³ {t('summary.capacity')}</div>
              <div className="text-2xl font-black text-primary mb-2">{recommendedTruck.price}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{t(`trucks.${recommendedTruck.key}.description`)}</p>
            </div>
          </div>

          <div className="p-6 bg-white max-h-[300px] overflow-y-auto custom-scrollbar">
            {Object.keys(selectedItems).length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <Package className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p>{t('summary.noItems')}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(selectedItems).map(([id, qty]) => {
                  const item = Object.values(ITEMS_DATA).flat().find(i => i.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between items-center text-sm p-2 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-semibold text-gray-700">{t(`items.${item.id}`)}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500">x{qty}</span>
                        <span className="font-bold text-primary w-12 text-right">{(item.volume * qty).toFixed(1)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="p-6 border-t border-gray-200">
            <Button
              className="w-full text-lg h-14"
              disabled={totalItems === 0}
              onClick={handleModalOpen}
            >
              {t('summary.getQuote')}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-secondary p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-extrabold">{t('modal.title')}</h2>
              <button onClick={handleModalClose} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              {submitSuccess ? (
                <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-secondary mb-2">
                    {t('modal.success.title')}
                  </h3>
                  <p className="text-base text-gray-600 mb-6">
                    {t('modal.success.description')}
                  </p>
                  <Button type="button" variant="secondary" onClick={handleModalClose}>
                    {t('modal.success.close')}
                  </Button>
                </div>
              ) : (
                <>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200 flex justify-between text-sm">
                    <div>
                      <span className="block text-gray-500 mb-1">{t('modal.totalVolume')}</span>
                      <strong className="text-lg text-secondary">{totalVolume.toFixed(1)} m³</strong>
                    </div>
                    <div className="text-right">
                      <span className="block text-gray-500 mb-1">{t('modal.recommended')}</span>
                      <strong className="text-lg text-primary">{recommendedTruck.name}</strong>
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        {t('modal.form.name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => { setFormName(e.target.value); setFieldErrors(p => ({ ...p, name: undefined })); }}
                        className={modalInputClass('name')}
                      />
                      {fieldErrors.name && (
                        <p className="text-red-500 text-xs font-medium mt-1">{getErrorMessage(fieldErrors.name)}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        {t('modal.form.email')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => { setFormEmail(e.target.value); setFieldErrors(p => ({ ...p, email: undefined })); }}
                        className={modalInputClass('email')}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-500 text-xs font-medium mt-1">{getErrorMessage(fieldErrors.email)}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        {t('modal.form.phone')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => { setFormPhone(e.target.value); setFieldErrors(p => ({ ...p, phone: undefined })); }}
                        className={modalInputClass('phone')}
                      />
                      {fieldErrors.phone && (
                        <p className="text-red-500 text-xs font-medium mt-1">{getErrorMessage(fieldErrors.phone)}</p>
                      )}
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        {t('modal.form.date')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formDate}
                        onChange={(e) => { setFormDate(e.target.value); setFieldErrors(p => ({ ...p, date: undefined })); }}
                        className={modalInputClass('date')}
                      />
                      {fieldErrors.date && (
                        <p className="text-red-500 text-xs font-medium mt-1">{getErrorMessage(fieldErrors.date)}</p>
                      )}
                    </div>

                    {/* Pickup / Delivery */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">
                          {t('modal.form.pickup')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formPickup}
                          onChange={(e) => { setFormPickup(e.target.value); setFieldErrors(p => ({ ...p, pickup: undefined })); }}
                          className={modalInputClass('pickup')}
                        />
                        {fieldErrors.pickup && (
                          <p className="text-red-500 text-xs font-medium mt-1">{getErrorMessage(fieldErrors.pickup)}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">
                          {t('modal.form.delivery')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formDelivery}
                          onChange={(e) => { setFormDelivery(e.target.value); setFieldErrors(p => ({ ...p, delivery: undefined })); }}
                          className={modalInputClass('delivery')}
                        />
                        {fieldErrors.delivery && (
                          <p className="text-red-500 text-xs font-medium mt-1">{getErrorMessage(fieldErrors.delivery)}</p>
                        )}
                      </div>
                    </div>

                    {/* Inventory (read-only, auto-built from selected items) */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        {t('modal.form.inventory')}
                      </label>
                      <textarea
                        readOnly
                        rows={4}
                        value={buildInventory()}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-md bg-gray-50 text-gray-700 text-sm resize-none cursor-default focus:outline-none"
                      />
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
                      className="w-full mt-4"
                      size="lg"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('modal.form.submitting') : t('modal.form.submit')}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
