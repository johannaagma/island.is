import {
  buildCustomField,
  buildMultiField,
  buildSection,
} from '@island.is/application/core'

export const capitalInfoSection = buildSection({
  id: 'capitalInfoSection',
  title: 'Fjármagnstekjur',
  children: [
    buildMultiField({
      id: 'capitalInfoSection',
      title: 'Fjármagnstekjur',
      description:
        'Fjármagnstekjur eru til dæmis vextir af sparnaði, arður af hlutabréfum, hagnaður af sölu eigna, leigutekjur, utan rekstrar, og greiðslur fyrir höfundarrétt. Til vaxtatekna teljast líka verðbætur, afföll og gengishagnaður. Tekjur sem þú hefur fengið í vöxtum fyrir 1. janúar 1997 þarf ekki að skrá í framtalið, því þær falla ekki undir fjármagnstekjuskatt samkvæmt lögum.',
      children: [
        buildCustomField(
          {
            id: 'capitalInfo3.1',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Innstæður í innlendum bönkum og sparisjóðum',
            sectionId: '3.1',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.2',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Innstæður í erlendum bönkum',
            sectionId: '3.2',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.3',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName:
              'Innlend og erlend verðbréf og kröfur. Stofnsjóðsinneign.',
            sectionId: '3.3',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.4',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Innstæður og verðbréf barna',
            sectionId: '3.4',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.5',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Hlutabréf og stofnfjárbréf sparisjóða',
            sectionId: '3.5',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Hlutabréf í erlendum hlutafélögum',
            sectionId: '3.6',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.7',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Leigutekjur',
            sectionId: '3.7',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.8',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Söluhagnaður/tap af hlutabréfum',
            sectionId: '3.8',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.9',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Annar söluhagnaður',
            sectionId: '3.9',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.10',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Tapaðar fjármagnstekjur. Mótreikningur.',
            sectionId: '3.10',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.11',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Höfundarréttargreiðslur',
            sectionId: '3.11',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.12',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName:
              'Arður og söluhagnaður hlutabréfa á markaði í frítekjumarki fjármagnstekna',
            sectionId: '3.12',
          },
        ),
      ],
    }),
  ],
})
