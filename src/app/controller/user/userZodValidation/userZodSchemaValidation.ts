import { z } from 'zod'

const userZodSchemaValidation = z.object({
  body: z.object({
    role: z.string({
      required_error: 'User role is required',
    }),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  userZodSchemaValidation,
}
