import {
  buildCustomField,
  buildMultiField,
  buildSection,
} from '@island.is/application/core'

export const otherAssetsSection = buildSection({
  id: 'otherAssetsSection',
  title: 'Eignir',
  children: [
    buildMultiField({
      id: 'otherAssets',
      title: 'Eignir aðrar en peningalegar',
      description:
        'Hér skal gera grein fyrir öllum eignum, öðrum en peningalegum. Þú þarft hins vegar ekki að skrá eftirlaunarétt, húsgögn, innanstokksmuni eða hluti sem hafa eingöngu persónulegt gildi.',
      children: [
        buildCustomField({
          id: 'otherAssets.domesticProperties',
          component: 'DomesticPropertiesTable',
        }),
        buildCustomField(
          {
            id: 'otherAssets.foreignProperties',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Erlendar fasteignir',
            sectionId: '4.2',
          },
        ),
        buildCustomField({
          id: 'otherAssets.cars',
          component: 'CarTable',
        }),
        buildCustomField(
          {
            id: 'otherAssets.other4.4',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Aðrar eignir',
            sectionId: '4.4',
          },
        ),
        buildCustomField(
          {
            id: 'otherAssets.other4.5',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Hrein eign',
            sectionId: '4.5',
          },
        ),
        buildCustomField(
          {
            id: 'otherAssets.other4.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Stofn til útreiknings tekjuskatts og útsvars',
            sectionId: '4.6',
          },
        ),
      ],
    }),
  ],
})
