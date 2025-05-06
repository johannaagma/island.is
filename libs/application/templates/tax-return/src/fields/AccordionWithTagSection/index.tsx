import { FieldBaseProps } from '@island.is/application/types'
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
    }
  }
}

export const AccordionWithTagSection = ({ field }: Props & FieldBaseProps) => {
  const { sectionName, sectionId } = field.props

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
        <div></div>
      </AccordionItem>
    </Accordion>
  )
}
