import {
  coreMessages,
  formatText,
  formatTextWithLocale,
} from '@island.is/application/core'
import {
  FieldBaseProps,
  TableRepeaterField,
} from '@island.is/application/types'
import {
  AlertMessage,
  Box,
  Button,
  GridRow,
  Icon,
  Stack,
  Table as T,
  Text,
  Tooltip,
} from '@island.is/island-ui/core'
import { useLocale } from '@island.is/localization'
import { FieldDescription } from '@island.is/shared/form-fields'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import {
  buildDefaultTableHeader,
  buildDefaultTableRows,
  handleCustomMappedValues,
  handleCustomStaticValues,
} from './utils'
import { Item } from './TableRepeaterItem'
import { Locale } from '@island.is/shared/types'
import { useApolloClient } from '@apollo/client/react'

interface Props extends FieldBaseProps {
  field: TableRepeaterField
}

export const TableRepeaterFormField: FC<Props> = ({
  application,
  field: data,
  showFieldName,
  error,
}) => {
  const {
    fields: rawItems,
    table,
    formTitle,
    description,
    marginTop = 6,
    marginBottom,
    getStaticTableData,
    title = '',
    titleVariant = 'h4',
    addItemButtonText = coreMessages.buttonAdd,
    cancelButtonText = coreMessages.buttonCancel,
    saveItemButtonText = coreMessages.reviewButtonSubmit,
    removeButtonTooltipText = coreMessages.deleteFieldText,
    editButtonTooltipText = coreMessages.editFieldText,
    editField = false,
    maxRows,
    onSubmitLoad,
    loadErrorMessage,
    initActiveFieldIfEmpty,
    getFixedBottomRow,
  } = data

  const apolloClient = useApolloClient()
  const [loadError, setLoadError] = useState<boolean>(false)

  const items = Object.keys(rawItems).map((key) => ({
    id: key,
    ...rawItems[key],
  }))

  const load = async () => {
    if (onSubmitLoad) {
      try {
        setLoadError(false)
        const submitResponse = await onSubmitLoad({
          apolloClient,
          application,
          tableItems: values,
          staticData: staticData,
        })

        submitResponse.dictionaryOfItems.forEach((x) => {
          methods.setValue(x.path, x.value)
        })
      } catch (e) {
        console.error('e', e)
        setLoadError(true)
      }
    }

    if (getFixedBottomRow) {
      try {
        const updatedFixedValue = await getFixedBottomRow({
          apolloClient,
          application,
          updatedValues: methods.getValues(),
          staticData: staticData,
        })
        setFixedBottomRow(updatedFixedValue.items)
      } catch (e) {
        console.error('e', e)
        setLoadError(true)
      }
    }
  }

  const { formatMessage, lang: locale } = useLocale()
  const methods = useFormContext()
  const [activeIndex, setActiveIndex] = useState(-1)
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: data.id,
  })
  const [isEditing, setIsEditing] = useState(false)

  const values = useWatch({ name: data.id, control: methods.control })
  const activeField = activeIndex >= 0 ? fields[activeIndex] : null
  const savedFields = fields.filter((_, index) => index !== activeIndex)
  const tableItems = items.filter((x) => x.displayInTable !== false)
  const tableHeader = table?.header ?? buildDefaultTableHeader(tableItems)
  const tableRows = table?.rows ?? buildDefaultTableRows(tableItems)
  const staticData = getStaticTableData?.(application)
  const canAddItem =
    maxRows === 0 ? false : maxRows ? savedFields.length < maxRows : true

  const [fixedBottomRow, setFixedBottomRow] = useState<
    Array<ReactNode> | undefined
  >()
  // check for components that might need some custom value mapping
  const customMappedValues = handleCustomMappedValues(tableItems, values)
  const customStaticValues = staticData
    ? handleCustomStaticValues(tableItems, staticData)
    : []

  const handleSaveItem = async (index: number) => {
    const isValid = await methods.trigger(`${data.id}[${index}]`, {
      shouldFocus: true,
    })

    if (isValid) {
      setActiveIndex(-1)
      await load()
    }
    setIsEditing(false)
  }

  const handleCancelItem = (index: number) => {
    setActiveIndex(-1)
    if (!isEditing) {
      remove(index)
    }
    setIsEditing(false)
  }

  const handleNewItem = () => {
    append({})
    setActiveIndex(fields.length)
    methods.clearErrors()
  }

  const handleRemoveItem = async (index: number) => {
    if (activeIndex === index) setActiveIndex(-1)
    if (activeIndex > index) setActiveIndex(activeIndex - 1)
    remove(index)
    if (!getFixedBottomRow) {
      return
    }

    const updatedFixedValue = await getFixedBottomRow({
      apolloClient,
      application,
      updatedValues: methods.getValues(),
      staticData: staticData,
    })
    setFixedBottomRow(updatedFixedValue.items)
  }

  const handleEditItem = (index: number) => {
    setActiveIndex(index)
    setIsEditing(true)
  }

  const formatTableValue = (key: string, item: Record<string, string>) => {
    if (item === undefined) {
      return
    }
    item[key] = item[key] ?? ''
    const formatFn = table?.format?.[key]
    const formatted = formatFn ? formatFn(item[key]) : item[key]
    return typeof formatted === 'string'
      ? formatted
      : Array.isArray(formatted)
      ? formatText(formatted, application, formatMessage).join(', ')
      : formatText(formatted, application, formatMessage)
  }

  useEffect(() => {
    const values = methods.getValues(data.id) || []
    if (initActiveFieldIfEmpty && values?.length === 0) {
      methods.reset({
        [data.id]: [{}],
      })
      setActiveIndex(0)
    }

    if (!getFixedBottomRow) {
      return
    }
    const updateFixedValue = async () => {
      const updatedFixedValue = await getFixedBottomRow({
        apolloClient,
        application,
        updatedValues: methods.getValues(),
        staticData: staticData,
      })
      setFixedBottomRow(updatedFixedValue.items)
    }
    updateFixedValue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box marginTop={marginTop} marginBottom={marginBottom}>
      {showFieldName && (
        <Text variant={titleVariant} marginBottom={2}>
          {formatTextWithLocale(
            title,
            application,
            locale as Locale,
            formatMessage,
          )}
        </Text>
      )}
      {description && (
        <FieldDescription
          description={formatTextWithLocale(
            description,
            application,
            locale as Locale,
            formatMessage,
          )}
        />
      )}
      <Box marginTop={description ? 3 : 0}>
        <Stack space={4}>
          <T.Table>
            <T.Head>
              <T.Row>
                <T.HeadData></T.HeadData>
                {tableHeader.map((item, index) => (
                  <T.HeadData key={index}>
                    {formatText(item ?? '', application, formatMessage)}
                  </T.HeadData>
                ))}
              </T.Row>
            </T.Head>
            <T.Body>
              {staticData &&
                staticData.map((item, index) => (
                  <T.Row key={index}>
                    <T.Data
                      borderColor={
                        fixedBottomRow &&
                        index === savedFields.length + staticData.length - 1
                          ? 'dark300'
                          : undefined
                      }
                    >
                      <Box display="flex" alignItems="center">
                        {editField && (
                          <Tooltip
                            placement="left"
                            text={formatText(
                              editButtonTooltipText,
                              application,
                              formatMessage,
                            )}
                          >
                            <button
                              type="button"
                              onClick={() => handleEditItem(index)}
                            >
                              <Icon
                                icon="pencil"
                                color="blue400"
                                type="outline"
                                size="small"
                              />
                            </button>
                          </Tooltip>
                        )}
                      </Box>
                    </T.Data>
                    {Object.keys(item).map((key, indexy) => (
                      <T.Data
                        key={`static-${key}-${indexy}`}
                        borderColor={
                          fixedBottomRow &&
                          index === savedFields.length + staticData.length - 1
                            ? 'dark300'
                            : undefined
                        }
                      >
                        {formatTableValue(
                          key,
                          customStaticValues?.length
                            ? (customStaticValues[index] as Record<
                                string,
                                string
                              >)
                            : (item as Record<string, string>),
                        )}
                      </T.Data>
                    ))}
                  </T.Row>
                ))}
              {values &&
                savedFields.map((field, index) => (
                  <T.Row key={field.id}>
                    <T.Data
                      borderColor={
                        fixedBottomRow &&
                        (index === savedFields.length - 1 ||
                          (staticData &&
                            index ===
                              savedFields.length + staticData.length - 1))
                          ? 'dark300'
                          : undefined
                      }
                    >
                      <Box display="flex" alignItems="center">
                        <Tooltip
                          placement="left"
                          text={formatText(
                            removeButtonTooltipText,
                            application,
                            formatMessage,
                          )}
                        >
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(index)}
                          >
                            <Icon icon="trash" type="outline" color="blue400" />
                          </button>
                        </Tooltip>
                        &nbsp;&nbsp;
                        {editField && (
                          <Tooltip
                            placement="left"
                            text={formatText(
                              editButtonTooltipText,
                              application,
                              formatMessage,
                            )}
                          >
                            <button
                              type="button"
                              onClick={() => handleEditItem(index)}
                            >
                              <Icon
                                icon="pencil"
                                color="blue400"
                                type="outline"
                                size="small"
                              />
                            </button>
                          </Tooltip>
                        )}
                      </Box>
                    </T.Data>
                    {tableRows.map((item, idx) => (
                      <T.Data
                        key={`${item}-${idx}`}
                        borderColor={
                          fixedBottomRow &&
                          (index === savedFields.length - 1 ||
                            (staticData &&
                              index ===
                                savedFields.length + staticData.length - 1))
                            ? 'dark300'
                            : undefined
                        }
                        disabled={
                          values[index]?.disabled === 'true' ? true : false
                        }
                      >
                        {formatTableValue(
                          item,
                          customMappedValues.length
                            ? customMappedValues[index]
                            : values[index],
                        )}
                      </T.Data>
                    ))}
                  </T.Row>
                ))}
              {fixedBottomRow && (
                <T.Row>
                  {fixedBottomRow.map((item, index) => (
                    <T.Data key={index} text={{ fontWeight: 'semiBold' }}>
                      {typeof item === 'string'
                        ? formatText(item ?? '', application, formatMessage)
                        : item}
                    </T.Data>
                  ))}
                </T.Row>
              )}
            </T.Body>
          </T.Table>
          {activeField ? (
            <Stack space={2} key={activeField.id}>
              {formTitle && (
                <Text variant="h4">
                  {formatText(formTitle, application, formatMessage)}
                </Text>
              )}
              <GridRow rowGap={[2, 2, 2, 3]}>
                {items.map((item) => (
                  <Item
                    key={`${data.id}[${activeIndex}].${item.id}`}
                    application={application}
                    error={error}
                    item={item}
                    dataId={data.id}
                    activeIndex={activeIndex}
                    values={values}
                  />
                ))}
              </GridRow>
              <Box display="flex" alignItems="center" justifyContent="flexEnd">
                <Box>
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={() => handleCancelItem(activeIndex)}
                  >
                    {formatText(cancelButtonText, application, formatMessage)}
                  </Button>
                </Box>
                <Box marginLeft={2}>
                  <Button
                    type="button"
                    onClick={() => handleSaveItem(activeIndex)}
                  >
                    {formatText(saveItemButtonText, application, formatMessage)}
                  </Button>
                </Box>
              </Box>
            </Stack>
          ) : (
            canAddItem && (
              <Box display="flex" justifyContent="flexEnd">
                <Button
                  variant="ghost"
                  type="button"
                  onClick={handleNewItem}
                  icon="add"
                  disabled={!canAddItem}
                >
                  {formatText(addItemButtonText, application, formatMessage)}
                </Button>
              </Box>
            )
          )}
        </Stack>
        {error && typeof error === 'string' && (
          <Box marginTop={3}>
            <AlertMessage type="error" title={error} />
          </Box>
        )}
        {loadError && loadErrorMessage && (
          <Box marginTop={3}>
            <AlertMessage
              type="error"
              title={formatText(loadErrorMessage, application, formatMessage)}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}
