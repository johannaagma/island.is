import {
  buildCustomField,
  buildMultiField,
  buildSection,
} from '@island.is/application/core'

export const debtSection = buildSection({
  id: 'debtSection',
  title: 'Skuldir og vaxtagjöld',
  children: [
    buildMultiField({
      id: 'debt',
      title: 'Skuldir (lán) og vaxtagjöld',
      description:
        'Gera skal grein fyrir öllum skuldum í árslok, þ.m.t. skuldum við greiðslukortafyrirtæki og smálánafyrirtæki.',
      children: [
        buildCustomField(
          {
            id: 'debt.more5.1',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Vaxtagjöld vegna kaupleuguíbúða eða búseturéttar',
            sectionId: '5.1',
          },
        ),
        buildCustomField({
          id: 'debt.residentialLoan',
          component: 'ResidentialPropertyLoan',
        }),
        buildCustomField(
          {
            id: 'debt.more5.3',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Eftirstöðvar skulda á söludegi',
            sectionId: '5.3',
          },
        ),

        buildCustomField(
          {
            id: 'debt.more5.4',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Skuldir umfram eignir í atvinnurekstri',
            sectionId: '5.4',
          },
        ),
        buildCustomField({
          id: 'debt.otherDebst',
          component: 'OtherDebtsTable',
        }),
      ],
    }),
  ],
})
