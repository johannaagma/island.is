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
        'Börn yngri en 16 ára greiða ekki tekjuskatt og útsvar af fyrstu 180.000  kr. af launatekjum sínum á árinu 2024. Eftir sem áður skal telja allar launatekjur barns fram á barnaframtali. Gera skal grein fyrir tekjunum á sérstöku framtali, Skattframtal barns RSK 1.02. Aðeins 1. kafli framtals er þá fylltur út. Rita skal nafn og kennitölu barns og foreldris (framfæranda) á framtalið og skiptir ekki máli hvort skráð er kennitala föður eða móður.',
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
