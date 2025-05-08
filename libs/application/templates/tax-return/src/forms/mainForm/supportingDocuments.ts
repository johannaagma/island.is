import {
  buildCustomField,
  buildMultiField,
  buildSection,
} from '@island.is/application/core'

export const supportingDocumentsSection = buildSection({
  id: 'supportingDocumentsSection',
  title: 'Fylgiskjöl',
  children: [
    buildMultiField({
      id: 'supportingDocuments',
      title: 'Fylgiskjöl',
      children: [
        buildCustomField(
          {
            id: 'supportingDocuments1.1',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Uppgjör atvinnurekstrar',
            sectionId: '7.1',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.2',
            component: 'AccordionWithFileUpload',
          },
          {
            sectionName: ' Dagpeningar og frádráttur frá þeim',
            sectionId: '7.2',
            fileUploadTitle: 'Fylgiskjal með dagpeningum',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.3',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Kaup og sala eigna',
            sectionId: '7.3',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.4',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Húsbyggingarskýrsla',
            sectionId: '7.4',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.5',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Hlutabréfaeign - kaup og sala',
            sectionId: '7.5',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Sala/innlausn verðbréfa',
            sectionId: '7.6',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Umsókn um lækkun á tekjuskattsstofni',
            sectionId: '7.7',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithFileUpload',
          },
          {
            sectionName: 'Ökutækjastyrkur og frádráttur frá honum',
            sectionId: '7.8',
            fileUploadTitle: 'Fylgiskjal með ökutækjastyrk',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Vistun í heimahúsum',
            sectionId: '7.9',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Tekjur og eignir erlendis',
            sectionId: '7.10',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Erlendis búsettir með tekjur eða eignir hérlendis',
            sectionId: '7.11',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Skattaleg heimilisfesti',
            sectionId: '7.12',
          },
        ),

        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Greiðslumiði - greidd leiga',
            sectionId: '7.13',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Greiðsluyfirlit',
            sectionId: '7.14',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Innskattskvöð fasteigna á RSK 4.01',
            sectionId: '7.15',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName:
              'Rannsóknar- og þróunarkostnaður hjá nýsköpunarfyrirtæki',
            sectionId: '7.16',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Skýrsla lögaðila á lágskattasvæði (CFC)',
            sectionId: '7.17',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Skýrsla eiganda í lögaðila á lágskattasvæði (CFC)',
            sectionId: '7.18',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Ný sambúð - RSK 3.27',
            sectionId: '7.19',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Skjölunarskyldir lögaðilar - RSK 4.28',
            sectionId: '7.20',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName:
              'Greinargerð um aflaverðmæti og rekstrarkostnað fiskiskipa - RSK 4.29',
            sectionId: '7.21',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Eyðublað RSK 4.25 (CFC félög) í rafrænum skilum',
            sectionId: '7.22',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Fjárfesting í hlutafjáraukningu - RSK 3.29',
            sectionId: '7.23',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Vistvænar eignir á eignaskrá RSK 4.01',
            sectionId: '7.24',
          },
        ),
        buildCustomField(
          {
            id: 'supportingDocuments1.6',
            component: 'AccordionWithTagSection',
          },
          {
            sectionName: 'Upplýsingagjöf frá almannaheillafélögum',
            sectionId: '7.25',
          },
        ),
      ],
    }),
  ],
})
