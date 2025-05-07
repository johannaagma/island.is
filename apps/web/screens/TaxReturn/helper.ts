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
    returnAndLevyDesc:
      'This chapter discusses in detail the criteria for the assessment of all fees that the Director of Internal Revenue imposes according to a tax return. Also the criteria for determining benefits. The Director of Internal Revenue also emphasizes electronic submission of tax data and here you will find information about electronic submission methods and about web keys, their role and functionality.',
    instructions2024: 'Tax return instructions 2024',
    instructions2024Desc:
      'Instructions for completing individual tax returns are almost exclusively downloaded from the Internet. You can get the instructions in paper form by picking them up at the nearest Tax Office, but they are not mailed out. When filing online, the tax return instructions are always at hand.',
    read: 'Reading from the results',
    readMore: 'Read more',
    readResultsDesc:
      'The assessment of public fees for individuals takes place at the end of May each year. The results of the assessment are published on the tax service website.',
    electronicIdDesc:
      'A web key is a password, issued by the Director of Internal Revenue, for electronic communication with tax authorities. All individuals and companies have web keys. Electronic IDs are expected to replace a significant portion of web keys over time.',
    taxSlipDesc:
      'Public taxes for individuals are assessed based on the tax return, and child benefits and interest benefits are also determined based on the tax return. The criteria are varied; income and assets for the main taxes, family status for benefits, and age is one criterion for, for example, the radio license fee. The results are published on an assessment slip.',
    olderTaxReturns: 'View older tax returns on my pages',
    openMyPages: 'Open my pages',
    pictureText: 'Image showing two people working on a laptop',
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
    returnAndLevyDesc:
      'Í þessum kafla er fjallað ítarlega um forsendur álagningar allra gjalda, sem ríkisskattstjóri leggur á samkvæmt skattframtali. Einnig forsendur fyrir ákvörðun bóta. Þá leggur ríkisskattstjóri áherslu á rafræn skil skattgagna og er hér að finna upplýsingar um rafrænar skilaleiðir og um veflykla, hlutverk þeirra og virkni.',
    instructions2024: 'Framtalsleiðbeiningar 2024',
    instructions2024Desc:
      'Leiðbeiningar um útfyllingu skattframtals einstaklinga eru nær eingöngu sóttar á netið. Hægt er að fá leiðbeiningarnar á pappír með því að sækja þær í næstu starfsstöð Skattsins, en þær eru ekki bornar út. Þegar talið er fram á vefnum eru framtalsleiðbeiningar alltaf við höndina.',
    read: 'Að lesa úr álagningunni',
    readMore: 'Lesa meira',
    readResultsDesc:
      'Álagning opinberra gjalda einstaklinga fer fram í lok maí ár hvert. Niðurstöður álagningar eru birtar á þjónustuvef skattsins.',
    electronicIdDesc:
      'Veflykill er aðgangsorð, gefið út af ríkisskattstjóra, fyrir rafræn samskipti við skattyfirvöld. Allir einstaklingar og félög eiga veflykla. Rafræn skilríki eiga með tímanum að leysa drjúgan hluta veflykla af hólmi.',
    taxSlipDesc:
      'Opinber gjöld einstaklinga eru lögð á samkvæmt framtali og barnabætur og vaxtabætur eru einnig ákvarðaðar samkvæmt framtali. Forsendur eru margvíslegar; tekjur og eignir vegna helstu skattanna, fjölskyldustaða vegna bóta og aldur er ein forsenda t.d. útvarpsgjalds. Niðurstöður eru birtar á álagningarseðli.',
    olderTaxReturns: 'Skoða eldri skattframtöl á mínum síðum',
    openMyPages: 'Opna mínar síður',
    pictureText: 'Mynd sem sýnir tvær manneskjur að vinna í fartölvu',
  },
} as const

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations['en']

export const t = (locale: Locale, key: TranslationKey): string => {
  return translations[locale][key] || key
}
