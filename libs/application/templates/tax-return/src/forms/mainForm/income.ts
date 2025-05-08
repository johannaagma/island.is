import {
  buildCustomField,
  buildHiddenInput,
  buildMultiField,
  buildSection,
} from '@island.is/application/core'

export const incomeSection = buildSection({
  id: 'incomeSection',
  title: 'Tekjur',
  children: [
    buildMultiField({
      id: 'income',
      title: 'Tekjur ársins 2024',
      description:
        'Allar tekjur sem þú færð í tengslum við vinnu, svo sem laun, bónusa, styrki og aðrar greiðslur, eru sjálfkrafa skráðar í framtalið þitt út frá upplýsingum sem atvinnurekendur og stofnanir senda inn. Þetta á líka við um greiðslur frá opinberum aðilum eins og Tryggingastofnun, Vinnumálastofnun, Fæðingarorlofssjóði og lífeyrissjóðum. Í vefframtalinu geturðu séð sundurliðun á þessum greiðslum eftir þeim sem greiddu þær.',
      children: [
        buildCustomField({
          id: 'income.salaryIncome',
          component: 'SalaryIncomeTable',
        }),
        buildCustomField({
          id: 'income.otherIncome',
          component: 'OtherIncomeTable',
        }),
        buildCustomField({
          id: 'income.supportingIncome',
          component: 'SupportingIncomeTable',
        }),
        buildHiddenInput({
          id: 'income.fitnessGrants',
        }),
        buildHiddenInput({
          id: 'income.educationGrants',
        }),
        buildCustomField(
          {
            id: 'otherAssets.more2.4',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Reiknað endurgjald',
            sectionId: '2.4',
          },
        ),
        buildCustomField(
          {
            id: 'otherAssets.more2.5',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Hreinar tekjur af atvinnurekstri',
            sectionId: '2.5',
          },
        ),
        buildCustomField(
          {
            id: 'otherAssets.more2.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Frádráttur frá tekjum',
            sectionId: '2.6',
          },
        ),
        buildCustomField(
          {
            id: 'otherAssets.more2.7',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Stofn til útreiknings tekjuskatts og útsvars',
            sectionId: '2.7',
          },
        ),
        buildCustomField(
          {
            id: 'otherAssets.more2.8',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Tekjur erlendis, aðrar en fjármagnstekjur',
            sectionId: '2.8',
          },
        ),
        buildCustomField(
          {
            id: 'otherAssets.more2.9',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Skattfrjálsar tekjur',
            sectionId: '2.9',
          },
        ),
        buildCustomField(
          {
            id: 'otherAssets.more2.10',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Staðgreiðsla af launum',
            sectionId: '2.10',
          },
        ),
      ],
    }),
  ],
})
