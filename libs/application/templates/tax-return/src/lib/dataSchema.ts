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
          companyNationalId: z.string().optional(),
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
          typeOfPayment: z.string().optional(),
          payment: z.string().optional(),
        })
        .optional(),
    )
    .optional(),
  educationGrants: z
    .array(
      z
        .object({
          companyName: z.string().optional(),
          explanation: z.string().optional(),
          payment: z.string().optional(),
        })
        .optional(),
    )
    .optional(),
  fitnessGrants: z
    .array(
      z
        .object({
          companyName: z.string().optional(),
          description: z.string().optional(),
          payment: z.string().optional(),
        })
        .optional(),
    )
    .optional(),
})

const otherAssetsSchema = z.object({
  domesticProperties: z
    .array(
      z
        .object({
          propertyNumber: z.string().optional(),
          address: z.string().optional(),
          price: z.string().optional(),
        })
        .optional(),
    )
    .optional(),
  cars: z
    .array(
      z
        .object({
          carNumber: z.string().optional(),
          year: z.string().optional(),
          price: z.string().optional(),
        })
        .optional(),
    )
    .optional(),
})

const debtSchema = z.object({
  otherDebt: z.array(
    z.object({
      debtName: z.string().optional(),
      interestPayments: z.string().optional(),
      remainingAmount: z.string().optional(),
    }),
  ),
})

const propertyLoanSchema = z.object({
  loaner: z.string().optional(),
  loanerSSN: z.string().optional(),
  loanNumber: z.number().optional(),
  loanTime: z.number().optional(),
  total: z.number().optional(),
  installment: z.number().optional(),
  interest: z.number().optional(),
  balance: z.number().optional(),
  loanDate: z.string().optional(),
})

export const TaxReturnAnswerSchema = z.object({
  approveExternalData: z.boolean().refine((v) => v),
  applicantInformation: UserSchemaBase,
  income: incomeSchema.optional(),
  propertyLoan: z.array(propertyLoanSchema),
  otherAssets: otherAssetsSchema.optional(),
  debt: debtSchema,
})

export type PropertyLoanType = z.TypeOf<typeof propertyLoanSchema>
