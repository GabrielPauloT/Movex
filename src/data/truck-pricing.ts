/**
 * Single source of truth for truck hourly rates.
 * Update the values here to change prices everywhere: home Pricing section,
 * Volume Calculator, and the /pricing page (trucks list + estimates table).
 */
export const TRUCK_PRICES = {
  '4_5T': 149,
  '8T': 159,
  '12T': 179,
  '16T': 269,
} as const;

export type TruckKey = keyof typeof TRUCK_PRICES;

/** Returns the price as "$149" — used for standalone price labels. */
export const formatPrice = (key: TruckKey): string => `$${TRUCK_PRICES[key]}`;

/** Returns the price as "$149/hr" — used in the Volume Calculator. */
export const formatHourlyPrice = (key: TruckKey): string => `$${TRUCK_PRICES[key]}/hr`;

/**
 * Calculates an estimated total range "$min-$max" for a given time window,
 * rounding each bound down to match the legacy hardcoded values.
 */
export const calculateEstimateRange = (
  minHours: number,
  maxHours: number,
  key: TruckKey,
): string => {
  const price = TRUCK_PRICES[key];
  return `$${Math.floor(minHours * price)}-$${Math.floor(maxHours * price)}`;
};
