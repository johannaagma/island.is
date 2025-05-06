import { z } from 'zod'
import { DefaultEvents } from '@island.is/application/types'
import { TaxReturnAnswerSchema } from '../lib/dataSchema'

export type TaxReturn = z.TypeOf<typeof TaxReturnAnswerSchema>

export interface IndexableObject {
  [index: number]: Array<string>
}

export type Events = { type: DefaultEvents.SUBMIT | DefaultEvents.ABORT }

export enum States {
  PREREQUISITES = 'prerequisites',
  DRAFT = 'draft',
  SUBMIT = 'submit',
  PAYMENT = 'payment',
  COMPLETED = 'completed',
}

export enum Roles {
  APPLICANT = 'applicant',
}

export enum ApiActions {
  submitApplication = 'submitApplication',
  getApplicant = 'getApplicant',
}
