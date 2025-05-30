import { z } from 'zod';

export const schema = z.object({
  date: z.date({
    required_error: 'date.required',
  }).nullable(),
  name: z.string().max(128, 'name.max').optional(),
});
