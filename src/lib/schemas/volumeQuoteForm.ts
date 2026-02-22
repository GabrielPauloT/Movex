import { z } from 'zod';

export const volumeQuoteFormSchema = z.object({
  name: z.string().min(1, 'required'),
  email: z
    .string()
    .min(1, 'required')
    .email('invalidEmail'),
  phone: z
    .string()
    .min(1, 'required')
    .regex(/^[\d\s\-+()]{8,20}$/, 'invalidPhone'),
  date: z.string().min(1, 'required'),
  pickup: z.string().min(1, 'required'),
  delivery: z.string().min(1, 'required'),
  inventory: z.string().min(1, 'required'),
});

export type VolumeQuoteFormData = z.infer<typeof volumeQuoteFormSchema>;

export type VolumeQuoteFormErrors = Partial<Record<keyof VolumeQuoteFormData, string>>;
