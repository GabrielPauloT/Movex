import { z } from 'zod';

export const quoteFormSchema = z.object({
  name: z.string().min(1, 'required'),
  from: z.string().min(1, 'required'),
  to: z.string().min(1, 'required'),
  date: z.string().min(1, 'required'),
  phone: z
    .string()
    .min(1, 'required')
    .regex(/^[\d\s\-+()]{8,20}$/, 'invalidPhone'),
  email: z
    .string()
    .min(1, 'required')
    .email('invalidEmail'),
  inventory: z.string().min(1, 'required'),
}).refine((data) => data.from !== data.to, {
  message: 'sameCity',
  path: ['to'],
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;
