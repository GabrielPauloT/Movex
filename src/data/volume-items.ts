export interface VolumeItem {
  id: string;
  name: string;
  volume: number;
  icon: string; // Using emojis for now as per original design, could replace with Lucide icons
}

export type CategoryKey = 'bedroom' | 'living' | 'kitchen' | 'dining' | 'office' | 'outdoor' | 'boxes';

export const CATEGORIES: Record<CategoryKey, string> = {
  bedroom: 'Bedroom',
  living: 'Living Room',
  kitchen: 'Kitchen',
  dining: 'Dining Room',
  office: 'Office',
  outdoor: 'Outdoor',
  boxes: 'Boxes',
};

export const ITEMS_DATA: Record<CategoryKey, VolumeItem[]> = {
  bedroom: [
    { id: 'single_bed', name: 'Single Bed', volume: 1.8, icon: '🛏️' },
    { id: 'double_bed', name: 'Double Bed', volume: 2.2, icon: '🛏️' },
    { id: 'queen_bed', name: 'Queen Bed', volume: 2.5, icon: '🛏️' },
    { id: 'king_bed', name: 'King Bed', volume: 3.0, icon: '🛏️' },
    { id: 'wardrobe_small', name: 'Small Wardrobe', volume: 1.5, icon: '🚪' },
    { id: 'wardrobe_large', name: 'Large Wardrobe', volume: 2.5, icon: '🚪' },
    { id: 'dresser', name: 'Dresser', volume: 1.2, icon: '🗄️' },
    { id: 'nightstand', name: 'Nightstand', volume: 0.3, icon: '🛋️' },
    { id: 'bedside_table', name: 'Bedside Table', volume: 0.4, icon: '🪑' },
    { id: 'chest_drawers', name: 'Chest of Drawers', volume: 1.0, icon: '🗄️' },
    { id: 'mirror', name: 'Mirror', volume: 0.2, icon: '🪞' },
  ],
  living: [
    { id: 'sofa_2seat', name: '2-Seater Sofa', volume: 2.0, icon: '🛋️' },
    { id: 'sofa_3seat', name: '3-Seater Sofa', volume: 2.8, icon: '🛋️' },
    { id: 'armchair', name: 'Armchair', volume: 1.2, icon: '🪑' },
    { id: 'coffee_table', name: 'Coffee Table', volume: 0.5, icon: '🪑' },
    { id: 'tv_stand', name: 'TV Stand', volume: 0.8, icon: '📺' },
    { id: 'tv_small', name: 'TV (up to 50")', volume: 0.3, icon: '📺' },
    { id: 'tv_large', name: 'TV (50"+)', volume: 0.5, icon: '📺' },
    { id: 'bookshelf', name: 'Bookshelf', volume: 1.0, icon: '📚' },
    { id: 'side_table', name: 'Side Table', volume: 0.3, icon: '🪑' },
    { id: 'cabinet', name: 'Display Cabinet', volume: 1.5, icon: '🗄️' },
    { id: 'rug_large', name: 'Large Rug', volume: 0.4, icon: '🟫' },
  ],
  kitchen: [
    { id: 'fridge', name: 'Fridge', volume: 2.0, icon: '🧊' },
    { id: 'freezer', name: 'Freezer', volume: 1.5, icon: '❄️' },
    { id: 'washing_machine', name: 'Washing Machine', volume: 1.0, icon: '🫧' },
    { id: 'dryer', name: 'Dryer', volume: 1.0, icon: '🌀' },
    { id: 'dishwasher', name: 'Dishwasher', volume: 0.8, icon: '🍽️' },
    { id: 'microwave', name: 'Microwave', volume: 0.2, icon: '📦' },
    { id: 'kitchen_table', name: 'Kitchen Table', volume: 1.0, icon: '🪑' },
    { id: 'kitchen_chairs', name: 'Kitchen Chair', volume: 0.3, icon: '🪑' },
    { id: 'pantry', name: 'Pantry Cabinet', volume: 1.2, icon: '🗄️' },
  ],
  dining: [
    { id: 'dining_table_4', name: 'Dining Table (4 seat)', volume: 1.5, icon: '🪑' },
    { id: 'dining_table_6', name: 'Dining Table (6 seat)', volume: 2.0, icon: '🪑' },
    { id: 'dining_table_8', name: 'Dining Table (8 seat)', volume: 2.5, icon: '🪑' },
    { id: 'dining_chair', name: 'Dining Chair', volume: 0.4, icon: '🪑' },
    { id: 'buffet', name: 'Buffet', volume: 1.5, icon: '🗄️' },
    { id: 'china_cabinet', name: 'China Cabinet', volume: 2.0, icon: '🗄️' },
  ],
  office: [
    { id: 'desk', name: 'Desk', volume: 1.2, icon: '🖥️' },
    { id: 'office_chair', name: 'Office Chair', volume: 0.6, icon: '🪑' },
    { id: 'filing_cabinet_2', name: 'Filing Cabinet (2 drawer)', volume: 0.5, icon: '🗄️' },
    { id: 'filing_cabinet_4', name: 'Filing Cabinet (4 drawer)', volume: 0.8, icon: '🗄️' },
    { id: 'bookshelf_office', name: 'Bookshelf', volume: 1.0, icon: '📚' },
    { id: 'printer', name: 'Printer', volume: 0.2, icon: '🖨️' },
  ],
  outdoor: [
    { id: 'bbq', name: 'BBQ', volume: 1.0, icon: '🍖' },
    { id: 'outdoor_table', name: 'Outdoor Table', volume: 1.5, icon: '🪑' },
    { id: 'outdoor_chair', name: 'Outdoor Chair', volume: 0.4, icon: '🪑' },
    { id: 'sun_lounger', name: 'Sun Lounger', volume: 0.8, icon: '🏖️' },
    { id: 'umbrella', name: 'Patio Umbrella', volume: 0.3, icon: '☂️' },
    { id: 'garden_tools', name: 'Garden Tools Box', volume: 0.5, icon: '🧰' },
    { id: 'bike', name: 'Bicycle', volume: 0.6, icon: '🚲' },
    { id: 'lawnmower', name: 'Lawnmower', volume: 0.8, icon: '🌱' },
  ],
  boxes: [
    { id: 'box_small', name: 'Small Box', volume: 0.05, icon: '📦' },
    { id: 'box_medium', name: 'Medium Box', volume: 0.1, icon: '📦' },
    { id: 'box_large', name: 'Large Box', volume: 0.15, icon: '📦' },
    { id: 'box_wardrobe', name: 'Wardrobe Box', volume: 0.3, icon: '📦' },
    { id: 'box_book', name: 'Book Box', volume: 0.08, icon: '📚' },
  ],
};

export const TRUCKS = {
  '4T': { name: '4T Truck', capacity: 19, min: 0, max: 23, price: '$129/hr', description: 'Perfect for 1-2 bedroom apartments', icon: '🚚' },
  '8T': { name: '8T Truck', capacity: 38, min: 24, max: 40, price: '$139/hr', description: 'Ideal for 2-3 bedroom homes', icon: '🚛' },
  '10T': { name: '10T Truck', capacity: 46, min: 41, max: 999, price: '$149/hr', description: 'Best for 3+ bedroom homes or large moves', icon: '🚜' },
};
