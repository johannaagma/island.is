import { Injectable } from '@nestjs/common'
import { ApplicationTypes } from '@island.is/application/types'
import { BaseTemplateApiService } from '../../base-template-api.service'
import { TaxReturn, TaxReturnClient } from '@island.is/clients/tax-return'
import { NationalRegistryBackendApiClient } from '@island.is/clients/national-registry-backend-api'
import { TemplateApiModuleActionProps } from '../../../types'
import { Entry } from './types/financialOverview'
import { TaxReturnAnswers } from '@island.is/application/templates/tax-return'
import {
  carCategories,
  domesticPropertyCategories,
  domesticPropertyLoansCategories,
  otherDebtsCategories,
  otherIncomeCategories,
  salaryIncomeCategories,
  supportingIncomeCategories,
} from './constants/EntryCategories'
import { getNumberFromAmount, groupOtherDebtsById } from './utils'
import { TemplateApiError } from '@island.is/nest/problem'
import { getValueViaPath } from '@island.is/application/core'
import { getFieldNumber } from './utils/getFieldNumber'

@Injectable()
export class TaxReturnService extends BaseTemplateApiService {
  constructor(
    private readonly taxReturnClient: TaxReturnClient,
    private readonly nationalRegistryClient: NationalRegistryBackendApiClient,
  ) {
    super(ApplicationTypes.TAX_RETURN)
  }

  async validateCanCreate() {
    const taxReturns = await this.taxReturnClient.getTaxReturns('1203894569')
    const currentYear = new Date().getFullYear()
    const currentYearTaxReturn = taxReturns.find((x) => x.year === currentYear)

    if (currentYearTaxReturn) {
      throw new TemplateApiError(
        {
          title: 'Ekki tókst að hefja skattframtal',
          summary:
            'Þú hefur nú þegar skilað inn skattframtali fyrir núverandi tímabil. Þú getur nálgast það inni á þínu svæði á mínum síðum.',
        },
        500,
      )
    }
  }

  async getFinancialOverview() {
    const results = await this.taxReturnClient.getFinancialOverview(
      '1203894569',
    )
    if (!results) {
      throw new Error('No results found')
    }

    const salaryIncome = results.entries.filter((x: Entry) =>
      salaryIncomeCategories.includes(x.fieldNumber),
    )

    const otherIncome = results.entries.filter((x: Entry) =>
      otherIncomeCategories.includes(x.fieldNumber),
    )

    const supportingIncome = results.entries.filter((x: Entry) =>
      supportingIncomeCategories.includes(x.fieldNumber),
    )

    const domesticProperties = results.entries.filter((x: Entry) =>
      domesticPropertyCategories.includes(x.fieldNumber),
    )
    const domesticPropertyLoans = results.entries.filter((x: Entry) =>
      domesticPropertyLoansCategories.includes(x.fieldNumber),
    )
    const cars = results.entries.filter((x: Entry) =>
      carCategories.includes(x.fieldNumber),
    )
    const otherDebts = results.entries.filter((x: Entry) =>
      otherDebtsCategories.includes(x.fieldNumber),
    )

    const otherDebtsGrouped = groupOtherDebtsById(otherDebts)

    return {
      salaryIncome,
      otherIncome,
      supportingIncome,
      domesticProperties,
      cars,
      otherDebts: otherDebtsGrouped,
      domesticPropertyLoans,
    }
  }

  async getIndividual() {
    return this.nationalRegistryClient.getIndividual('1203894569')
  }

  async submitApplication({ application }: TemplateApiModuleActionProps) {
    const income = getValueViaPath<TaxReturnAnswers['income']>(
      application.answers,
      'income',
      undefined,
    )

    /*--*/
    const salaryExternalData =
      getValueViaPath<any>(
        application.externalData,
        'getFinancialOverview.data.salaryIncome',
        undefined,
      ) || []

    const salaryAnswers =
      income?.salaryIncome?.map((x) => ({
        fieldNumber: getFieldNumber('income.salaryIncome'),
        amount: getNumberFromAmount(x?.salaryAmount),
        data: {
          companyName: x?.companyName,
          companyNationalId: x?.companyNationalId,
        },
      })) || []

    const salary = [...salaryExternalData, ...salaryAnswers]

    /*--*/
    /*--*/
    const otherIncomeExternalData =
      getValueViaPath<any>(
        application.externalData,
        'getFinancialOverview.data.otherIncome',
        undefined,
      ) || []

    const otherIncomeAnswers =
      income?.otherIncome?.map((x) => ({
        fieldNumber: getFieldNumber('income.otherIncome'),
        amount: getNumberFromAmount(x?.payment),
      })) || []

    const otherIncome = [...otherIncomeExternalData, ...otherIncomeAnswers]

    /*--*/
    /*--*/
    const supportingIncomeExternalData =
      getValueViaPath<any>(
        application.externalData,
        'getFinancialOverview.data.otherIncome',
        undefined,
      ) || []
    const educationGrantsAnswers =
      income?.educationGrants?.map((x) => ({
        fieldNumber: getFieldNumber('income.educationGrants'),
        amount: getNumberFromAmount(x?.payment),
      })) || []

    const fitnessGrantsAnswers =
      income?.fitnessGrants?.map((x) => ({
        fieldNumber: getFieldNumber('income.fitnessGrants'),
        amount: getNumberFromAmount(x?.payment),
      })) || []

    const supportingIncome = [
      ...supportingIncomeExternalData,
      ...educationGrantsAnswers,
      ...fitnessGrantsAnswers,
    ]
    /*--*/
    /*--*/

    const propertyLoansAnswers =
      getValueViaPath<TaxReturnAnswers['propertyLoan']>(
        application.answers,
        'propertyLoan',
        undefined,
      ) || []

    const propertyLoansExternalData =
      getValueViaPath<any>(
        application.externalData,
        'getFinancialOverview.data.domesticPropertyLoans',
        [],
      ) || []

    const propertyLoansInterest =
      propertyLoansAnswers?.map((x) => ({
        fieldNumber: getFieldNumber('propertyLoan.interest'),
        amount: x?.interest || 0,
        data: {
          lenderName: x?.loaner,
          loanNumber: x?.loanNumber,
          loanStartDate: x?.loanDate,
          lenderNationalId: x?.loanerSSN,
          loanPeriodInYears: x?.loanTime,
          purchaseYear: propertyLoansExternalData[0]?.data.purchaseYear,
          address: propertyLoansExternalData[0]?.data.address,
        },
      })) || []

    const propertyLoansBalance =
      propertyLoansAnswers?.map((x) => ({
        fieldNumber: getFieldNumber('propertyLoan.balance'),
        amount: x?.balance || 0,
        data: {
          lenderName: x?.loaner,
          loanNumber: x?.loanNumber,
          loanStartDate: x?.loanDate,
          lenderNationalId: x?.loanerSSN,
          loanPeriodInYears: x?.loanTime,
          purchaseYear: propertyLoansExternalData[0]?.data.purchaseYear,
          address: propertyLoansExternalData[0]?.data.address,
        },
      })) || []

    const domesticPropertyLoans = [
      ...propertyLoansExternalData,
      ...propertyLoansInterest,
      ...propertyLoansBalance,
    ]
    /*--*/
    /*--*/
    const domesticPropertiesExternalData =
      getValueViaPath<any>(
        application.externalData,
        'getFinancialOverview.data.domesticProperties',
        [],
      ) || []

    const domesticPropertiesAnswers =
      getValueViaPath<TaxReturnAnswers['otherAssets']>(
        application.answers,
        'otherAssets',
        undefined,
      )?.domesticProperties || []

    const domesticPropertiesAnswersMapped =
      domesticPropertiesAnswers?.map((x) => ({
        fieldNumber: getFieldNumber('otherAssets.domesticProperties'),
        amount: getNumberFromAmount(x?.price),
        data: {
          propertyNumber: x?.propertyNumber,
          address: x?.address,
        },
      })) || []
    const domesticProperties = [
      ...domesticPropertiesExternalData,
      ...domesticPropertiesAnswersMapped,
    ]
    /*--*/
    const carsExternalData =
      getValueViaPath<any>(
        application.externalData,
        'getFinancialOverview.data.cars',
        [],
      ) || []
    const carsAnswers =
      getValueViaPath<TaxReturnAnswers['otherAssets']>(
        application.answers,
        'otherAssets',
        undefined,
      )?.cars || []
    const carAnswersMapped =
      carsAnswers?.map((x) => ({
        fieldNumber: getFieldNumber('otherAssets.cars'),
        amount: getNumberFromAmount(x?.price),
        data: {
          permno: x?.carNumber,
          purchaseYear: x?.year,
        },
      })) || []

    const cars = [...carsExternalData, ...carAnswersMapped]
    /*--*/
    /*--*/

    const otherDebtExternalData =
      getValueViaPath<any>(
        application.externalData,
        'getFinancialOverview.data.otherDebts',
        [],
      ) || []

    const otherDebtAnswers = getValueViaPath<TaxReturnAnswers['debt']>(
      application.answers,
      'debt',
      undefined,
    )

    const otherDebtInterest =
      otherDebtAnswers?.otherDebt?.map((x) => ({
        fieldNumber: getFieldNumber('otherDebt.interest'),
        amount: getNumberFromAmount(x?.interestPayments),
        data: {
          description: x?.debtName,
        },
      })) || []

    const otherDebtBalance =
      otherDebtAnswers?.otherDebt?.map((x) => ({
        fieldNumber: getFieldNumber('otherDebt.balance'),
        amount: getNumberFromAmount(x?.remainingAmount),
        data: {
          description: x?.debtName,
        },
      })) || []
    const debt = [
      ...otherDebtExternalData,
      ...otherDebtInterest,
      ...otherDebtBalance,
    ]
    /*--*/
    try {
      this.taxReturnClient.submitTaxReturn('1203894569', {
        id: application.id,
        year: new Date().getFullYear(),
        entries: [
          ...salary,
          ...otherIncome,
          ...supportingIncome,
          ...domesticPropertyLoans,
          ...domesticProperties,
          ...cars,
          ...debt,
        ],
      })
    } catch (error) {
      console.log('error', error)
    }
  }
}
