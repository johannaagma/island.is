import {
  buildCustomField,
  buildMultiField,
  buildSection,
} from '@island.is/application/core'

export const childSection = buildSection({
  id: 'childSection',
  title: 'Framtal barna',
  children: [
    buildMultiField({
      id: 'child',
      title: 'Framtal barna',
      description:
        'Börn sem eru yngri en 16 ára þurfa ekki að borga tekjuskatt og útsvar af fyrstu 180.000 krónum sem þau afla í launatekjum á árinu 2024. Samt þarf að skrá allar launatekjur barnsins í framtalið. Þetta er gert á sérstakt framtal sem heitir „Skattframtal barns – RSK 1.02“. Þar þarf bara að fylla út fyrsta kaflann. Einnig þarf að skrá nafn og kennitölu barnsins og þess foreldris sem sér um barnið. Það skiptir ekki máli hvort það er móðir eða faðir.',
      children: [
        buildCustomField(
          {
            id: 'child6.1',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Launatekjur barns',
            sectionId: '6.1',
          },
        ),
        buildCustomField(
          {
            id: 'child6.2',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Staðgreiðsla vegna barns',
            sectionId: '6.2',
          },
        ),
        buildCustomField(
          {
            id: 'child6.3',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Skattlagning barna sem misst hafa foreldri',
            sectionId: '6.3',
          },
        ),
      ],
    }),
  ],
})
