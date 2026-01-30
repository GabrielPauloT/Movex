'use client';

import { useState, useMemo } from 'react';
import { Search, Package, Plus, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CATEGORIES, ITEMS_DATA, TRUCKS, CategoryKey, VolumeItem } from '@/data/volume-items';

export default function VolumeCalculator() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('bedroom');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [modalOpen, setModalOpen] = useState(false);

  // Filter items based on search or category
  const displayedItems = useMemo(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const allItems: VolumeItem[] = [];
      Object.values(ITEMS_DATA).forEach(list => allItems.push(...list));
      return allItems.filter(item => item.name.toLowerCase().includes(query));
    }
    return ITEMS_DATA[activeCategory];
  }, [activeCategory, searchQuery]);

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
    return Object.values(TRUCKS).find(t => totalVolume >= t.min && totalVolume <= t.max) || TRUCKS['4T'];
  }, [totalVolume]);

  const progress = Math.min((totalVolume / 50) * 100, 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
      {/* Main Calculator Area */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-br from-secondary to-secondary-light text-white p-8 text-center">
          <h1 className="text-3xl font-black mb-2 tracking-tight">Volume Calculator</h1>
          <p className="opacity-90 text-base">Select your items to calculate volume and get a truck recommendation</p>
          
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
              placeholder="Search for items..."
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
                {label}
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
                <div className="font-bold text-sm text-gray-900 mb-1 leading-tight">{item.name}</div>
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
                    Add Item
                  </div>
                )}
              </div>
            ))}
          </div>
          {displayedItems.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No items found matching &quot;{searchQuery}&quot;
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Summary */}
      <div className="lg:sticky lg:top-24 space-y-6">
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-secondary p-6 text-white text-center">
            <h2 className="text-xl font-extrabold mb-1">Your Moving Summary</h2>
            <p className="opacity-80 text-sm">{totalItems} items selected</p>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-accent p-8 text-center text-white">
            <div className="text-sm font-bold uppercase tracking-widest opacity-90 mb-2">Total Volume</div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-black tracking-tight">{totalVolume.toFixed(1)}</span>
              <span className="text-xl font-bold">m³</span>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="bg-white border-2 border-primary rounded-xl p-6 text-center shadow-sm relative overflow-hidden">
              <div className="text-5xl mb-4">{recommendedTruck.icon}</div>
              <h3 className="text-xl font-black text-secondary mb-1">{recommendedTruck.name}</h3>
              <div className="text-sm font-medium text-gray-600 mb-2">{recommendedTruck.capacity} m³ capacity</div>
              <div className="text-2xl font-black text-primary mb-2">{recommendedTruck.price}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{recommendedTruck.description}</p>
            </div>
          </div>

          <div className="p-6 bg-white max-h-[300px] overflow-y-auto custom-scrollbar">
            {Object.keys(selectedItems).length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <Package className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p>No items selected yet</p>
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
                         <span className="font-semibold text-gray-700">{item.name}</span>
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
              onClick={() => setModalOpen(true)}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-secondary p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-extrabold">Request Your Quote</h2>
              <button onClick={() => setModalOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200 flex justify-between text-sm">
                 <div>
                    <span className="block text-gray-500 mb-1">Total Volume</span>
                    <strong className="text-lg text-secondary">{totalVolume.toFixed(1)} m³</strong>
                 </div>
                 <div className="text-right">
                    <span className="block text-gray-500 mb-1">Recommended</span>
                    <strong className="text-lg text-primary">{recommendedTruck.name}</strong>
                 </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Quote request submitted! (Demo)'); setModalOpen(false); }}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                  <input required className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                  <input required type="email" className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                  <input required type="tel" className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-primary focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Pickup</label>
                    <input required className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-primary focus:outline-none" placeholder="Suburb/Postcode" />
                   </div>
                   <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Delivery</label>
                    <input required className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-primary focus:outline-none" placeholder="Suburb/Postcode" />
                   </div>
                </div>
                <Button type="submit" className="w-full mt-4" size="lg">Send Request</Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
