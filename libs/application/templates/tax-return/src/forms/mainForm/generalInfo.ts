import {
  buildCustomField,
  buildMultiField,
  buildSection,
} from '@island.is/application/core'

export const generalInfoSection = buildSection({
  id: 'generalInfo',
  title: 'Almennar upplýsingar',
  children: [
    buildMultiField({
      id: 'generalInfo',
      title: 'Almennar upplýsingar',
      children: [
        buildCustomField(
          {
            id: 'generalInfo1.1',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Börn',
            sectionId: '1.1',
          },
        ),
        buildCustomField(
          {
            id: 'generalInfo1.2',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Samsköttun',
            sectionId: '1.2',
          },
        ),
        buildCustomField(
          {
            id: 'generalInfo1.3',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Lækkum vegna framfærslu ungmenna',
            sectionId: '1.3',
          },
        ),
        buildCustomField(
          {
            id: 'generalInfo1.4',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Eignabreytingar og aðrar athugasemdir',
            sectionId: '1.4',
          },
        ),
        buildCustomField(
          {
            id: 'generalInfo1.5',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Arfur',
            sectionId: '1.5',
          },
        ),
        buildCustomField(
          {
            id: 'generalInfo1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Búseta á Íslandi hluta úr ári',
            sectionId: '1.6',
          },
        ),
      ],
    }),
  ],
})
