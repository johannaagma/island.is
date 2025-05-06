import {
  buildAlertMessageField,
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
      children: [
        buildAlertMessageField({
          id: 'capitalInfoSection.alert',
          alertType: 'info',
          description:
            'Fjármagnstekjur eru vaxtatekjur, arður, söluhagnaður, leigutekjur utan rekstrar og höfundarréttargreiðslur. Með vaxtatekjum er átt við vexti, verðbætur, afföll og gengishagnað. Vaxtatekjur sem áfallnar voru fyrir gildistöku laga um skatt á fjármagnstekjur, þ.e. fyrir 1. janúar 1997, eiga ekki að færast á framtal því þær mynda ekki stofn til skatts á fjármagnstekjur.',
        }),
        buildCustomField(
          {
            id: 'capitalInfo3.1',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Innstæður í innlendum bönkum og sparisjóðum (0)',
            sectionId: '3.1',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.2',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Innstæður í erlendum bönkum (0)',
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
              'Innlend og erlend verðbréf og kröfur. Stofnsjóðsinneign. (0)',
            sectionId: '3.3',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.4',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Innstæður og verðbréf barna (0)',
            sectionId: '3.4',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.5',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Hlutabréf og stofnfjárbréf sparisjóða (0)',
            sectionId: '3.5',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Hlutabréf í erlendum hlutafélögum (0)',
            sectionId: '3.6',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.7',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Leigutekjur (0)',
            sectionId: '3.7',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.8',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Söluhagnaður/tap af hlutabréfum (0)',
            sectionId: '3.8',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.9',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Annar söluhagnaður (0)',
            sectionId: '3.9',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.10',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Tapaðar fjármagnstekjur. Mótreikningur. (0)',
            sectionId: '3.10',
          },
        ),
        buildCustomField(
          {
            id: 'capitalInfo3.11',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Höfundarréttargreiðslur (0)',
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
              'Arður og söluhagnaður hlutabréfa á markaði í frítekjumarki fjármagnstekna (0)',
            sectionId: '3.12',
          },
        ),
      ],
    }),
  ],
})
