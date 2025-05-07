import {
  buildCustomField,
  buildMultiField,
  buildOverviewField,
  buildSection,
  buildSubmitField,
} from '@island.is/application/core'
import { getApplicantForOverview } from '../../utils/getOverviewItems'

export const overviewSection = buildSection({
  id: 'overviewSection',
  title: 'Overview',
  children: [
    buildMultiField({
      id: 'overviewSection',
      title: 'Yfirlit skattframtals',
      description:
        'Vinsamlegast farðu yfir gögnin hér að neðan til að staðfesta að réttar upplýsingar hafi verið gefnar upp.',
      children: [
        buildOverviewField({
          id: 'overview',
          title: 'Umsækjandi',
          backId: 'umsaekjandi',
          bottomLine: false,
          items: getApplicantForOverview,
        }),
        buildCustomField({
          id: 'overviewComp',
          component: 'Overview',
        }),
        buildSubmitField({
          id: 'submit',
          title: 'Submit',
          refetchApplicationAfterSubmit: true,
          actions: [
            {
              event: 'SUBMIT',
              name: 'Submit',
              type: 'primary',
            },
          ],
        }),
      ],
    }),
  ],
})
