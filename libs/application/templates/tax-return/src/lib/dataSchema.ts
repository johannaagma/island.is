// import * as kennitala from 'kennitala'
import { z } from 'zod'

const UserSchemaBase = z.object({
  nationalId: z.string(),
  // .refine(
  //   (nationalId) =>
  //     nationalId &&
  //     nationalId.length !== 0 &&
  //     kennitala.isValid(nationalId)
  // )
  name: z.string().min(1),
  // email: z.string().refine((x) => isValidEmail(x)),
  // phoneNumber: z.string().refine((x) => isValidPhoneNumber(x)),
})

const incomeSchema = z.object({
  salaryIncome: z
    .array(
      z
        .object({
          companyName: z.string().optional(),
          salaryAmount: z.string().optional(),
        })
        .optional(),
    )
    .optional(),
  otherIncome: z
    .array(
      z
        .object({
          type: z.string().optional(),
          amount: z.string().optional(),
          companyName: z.string().optional(),
        })
        .optional(),
    )
    .optional(),
  supportingIncome: z
    .array(
      z
        .object({
          companyName: z.string().optional(),
          amount: z.string().optional(),
        })
        .optional(),
    )
    .optional(),
  totalIncome: z.string().optional(),
})

export const TaxReturnAnswerSchema = z.object({
  approveExternalData: z.boolean().refine((v) => v),
  applicantInformation: UserSchemaBase,
  income: incomeSchema.optional(),
})
