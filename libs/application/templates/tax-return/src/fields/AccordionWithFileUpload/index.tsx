import { FieldBaseProps } from '@island.is/application/types'
import { FileUploadController } from '@island.is/application/ui-components'
import {
  Accordion,
  AccordionItem,
  Box,
  Tag,
  Text,
} from '@island.is/island-ui/core'

type Props = {
  field: {
    props: {
      sectionName: string
      sectionId: string
      fileUploadTitle: string
    }
  }
}

export const AccordionWithFileUpload = ({
  field,
  application,
}: Props & FieldBaseProps) => {
  const { sectionName, sectionId, fileUploadTitle } = field.props

  return (
    <Accordion>
      <AccordionItem
        key={`accordion-item-other-income`}
        id={`accordion-item-other-income`}
        label={
          <Box display="flex" flexDirection="row">
            <Tag variant="purple">{sectionId}</Tag>
            <Box paddingLeft={2}>
              <Text variant="h4">{sectionName}</Text>
            </Box>
          </Box>
        }
      >
        <FileUploadController
          id={`${sectionName}.${sectionId}`}
          application={application}
          header={fileUploadTitle}
        />
      </AccordionItem>
    </Accordion>
  )
}
