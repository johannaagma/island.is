export const translations = {
  en: {
    islandIs: 'Ísland.is',
    skatturinn: 'Skatturinn',
    individuals: 'Individuals',
    serviceProvider: 'Service provider',
    toc: 'Table of contents',
    returnAndLevy: 'Tax return and levy',
    taxSlip: 'Taxation slip and assumptions 2025',
    instructions: 'Tax return instructions',
    electronicIdAndWebKeys: 'Electronic ID and web keys',
    confirmedCopy: 'Confirmed tax return copy',
    assessmentResults: 'Assessment results',
    assetsAndDebts: 'Assets and debts',
    taxLawLibrary: 'Tax law library',
    rentalIncome: 'Rental income',
    electronicId: 'Electronic ID',
    childBenefits: 'Child benefits',
    personalDiscount: 'Personal tax credit',
    perDiem: 'Per diem',
    firstApartment: 'First apartment',
    vehicleImport: 'Vehicle import',
  },
  is: {
    islandIs: 'Ísland.is',
    skatturinn: 'Skatturinn',
    individuals: 'Einstaklingar',
    serviceProvider: 'Þjónustuaðili',
    toc: 'Efnisyfirlit',
    returnAndLevy: 'Framtal og álagning',
    taxSlip: 'Álagningarseðill og forsendur 2025',
    instructions: 'Framtalsleiðbeiningar',
    electronicIdAndWebKeys: 'Rafræn skilríki og veflyklar',
    confirmedCopy: 'Staðfest afrit framtals',
    assessmentResults: 'Niðurstöður álagningar',
    assetsAndDebts: 'Eignir og skuldir',
    taxLawLibrary: 'Lagasafn skattsins',
    rentalIncome: 'Leigutekjur',
    electronicId: 'Rafræn skilríki',
    childBenefits: 'Barnabætur',
    personalDiscount: 'Persónuafsláttur',
    perDiem: 'Dagpeningar',
    firstApartment: 'Fyrsta íbúð',
    vehicleImport: 'Innflutningur ökutækja',
  },
} as const

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations['en']

export const t = (locale: Locale, key: TranslationKey): string => {
  return translations[locale][key] || key
}
