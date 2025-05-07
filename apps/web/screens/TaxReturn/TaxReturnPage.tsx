import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import {
  Box,
  BreadCrumbItem,
  Breadcrumbs,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Hidden,
  Icon,
  LinkV2,
  Navigation,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import { Header, Sticky, Webreader } from '@island.is/web/components'
import { Screen } from '@island.is/web/types'

import SidebarLayout from '../Layouts/SidebarLayout'
import { t } from './helper'
import * as styles from './TaxReturn.css'

interface UniversityComparisonProps {
  locale: string
}

const TaxReturnPage: Screen<UniversityComparisonProps> = ({ locale }) => {
  const lang = locale === 'is' ? 'is' : 'en'
  const minimal = false
  const showReadSpeaker = true
  const fullWidthContent = false
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
  const [hasMounted, setHasMounted] = useState(false)
  const router = useRouter()
  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (hasMounted && width) {
      setIsMobile(width < theme.breakpoints.md)
    }
  }, [hasMounted, width])

  if (!hasMounted) return null // or a fallback skeleton
  const breadcrumbItems: BreadCrumbItem[] = [
    { title: t(lang, 'islandIs') },
    { title: t(lang, 'skatturinn') },
    { title: t(lang, 'individuals') },
    { title: t(lang, 'returnAndLevy') },
  ]

  const navItems = [
    { title: t(lang, 'taxSlip') },
    { title: t(lang, 'instructions') },
    { title: t(lang, 'electronicIdAndWebKeys') },
    { title: t(lang, 'confirmedCopy') },
    { title: t(lang, 'assessmentResults') },
    { title: t(lang, 'assetsAndDebts') },
  ]

  const relatedMaterialItems = [
    { title: t(lang, 'taxLawLibrary') },
    { title: t(lang, 'rentalIncome') },
    { title: t(lang, 'electronicId') },
    { title: t(lang, 'childBenefits') },
    { title: t(lang, 'personalDiscount') },
    { title: t(lang, 'perDiem') },
    { title: t(lang, 'firstApartment') },
    { title: t(lang, 'vehicleImport') },
  ]

  const backLink = {
    url: '/',
    text: t(lang, 'individuals'),
  }

  return (
    <>
      <Header showSearchInHeader={true} megaMenuData={[]} />
      <Box></Box>
      {!minimal && (
        <SidebarLayout
          paddingTop={[2, 2, 9]}
          paddingBottom={[6, 6, 9]}
          isSticky={false}
          fullWidthContent={false}
          sidebarContent={
            <Sticky>
              <Stack space={3}>
                {backLink && (
                  <Box display={['none', 'none', 'block']} printHidden>
                    <LinkV2 href={backLink.url}>
                      <Button
                        preTextIcon="arrowBack"
                        preTextIconType="filled"
                        size="small"
                        type="button"
                        variant="text"
                        truncate
                        unfocusable
                      >
                        {backLink.text}
                      </Button>
                    </LinkV2>
                  </Box>
                )}
                <Box
                  background="purple100"
                  display={'flex'}
                  borderRadius="large"
                  padding={[3, 3, 4]}
                  columnGap={2}
                >
                  <Box marginY={0} display="flex">
                    <img
                      src={
                        'https://images.ctfassets.net/8k0h54kbe6bj/5y5K2hSSYAk3hzs7ZARe2X/f661c7af2ea66bda32651e3f2986d697/merki-skatturinn.png'
                      }
                      alt={'Skatturing logo'}
                    />
                  </Box>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                  >
                    <Text variant="eyebrow">{t(lang, 'serviceProvider')}</Text>
                    <Text paddingTop={0} variant="h3">
                      Skatturinn
                    </Text>
                  </Box>
                </Box>
                <Navigation
                  baseId="pageNav"
                  items={navItems}
                  title={t(lang, 'toc')}
                  activeItemTitle={t(lang, 'toc')}
                  renderLink={(link, item) => {
                    return <LinkV2 href={''}>{link}</LinkV2>
                  }}
                />
              </Stack>
              {/* Sidebar Content below */}
              <Box>
                <Box
                  background="purple100"
                  display={'flex'}
                  borderRadius="large"
                  padding={[3, 3, 4]}
                  marginY={3}
                >
                  <Stack space={[1, 1, 2]}>
                    <Text variant="eyebrow" as="h2" color="blueberry600">
                      Tengt efni
                    </Text>
                    <LinkV2 href={''}>
                      <Text color="dark400">{t(lang, 'taxLawLibrary')}</Text>
                    </LinkV2>
                    <LinkV2 href={''}>
                      <Text color="dark400">{t(lang, 'rentalIncome')}</Text>
                    </LinkV2>
                    <LinkV2 href={''}>
                      <Text color="dark400">{t(lang, 'electronicId')}</Text>
                    </LinkV2>
                    <LinkV2 href={''}>
                      <Text color="dark400">{t(lang, 'childBenefits')}</Text>
                    </LinkV2>
                    <LinkV2 href={''}>
                      <Text color="dark400">{t(lang, 'personalDiscount')}</Text>
                    </LinkV2>
                    <LinkV2 href={''}>
                      <Text color="dark400">{t(lang, 'perDiem')}</Text>
                    </LinkV2>
                    <LinkV2 href={''}>
                      <Text color="dark400">{t(lang, 'firstApartment')}</Text>
                    </LinkV2>
                    <LinkV2 href={''}>
                      <Text color="dark400">{t(lang, 'vehicleImport')}</Text>
                    </LinkV2>
                  </Stack>
                </Box>
              </Box>
            </Sticky>
          }
        >
          {isMobile && (
            <Box className={styles.menuStyle}>
              <Box marginY={2}>
                <Navigation
                  baseId="pageNavMobile"
                  isMenuDialog={true}
                  items={navItems}
                  title={t(lang, 'toc')}
                  activeItemTitle={'Efnisyfirlit'}
                  renderLink={(link, item) => {
                    return <LinkV2 href={''}>{link}</LinkV2>
                  }}
                />
              </Box>
              <Box marginY={2}>
                <Navigation
                  baseId="pageNavRelatedMobile"
                  isMenuDialog={true}
                  colorScheme="purple"
                  items={relatedMaterialItems}
                  title={t(lang, 'toc')}
                  activeItemTitle={'Tengt efni'}
                  renderLink={(link, item) => {
                    return <LinkV2 href={''}>{link}</LinkV2>
                  }}
                />
              </Box>
            </Box>
          )}

          <GridContainer>
            <GridRow>
              <GridColumn
                span={fullWidthContent ? ['9/9', '9/9', '7/9'] : '9/9'}
                offset={fullWidthContent ? ['0', '0', '1/9'] : '0'}
              >
                {breadcrumbItems && (
                  <Breadcrumbs
                    items={breadcrumbItems ?? []}
                    renderLink={(link, item) => {
                      return item?.href ? (
                        <NextLink href={item?.href} legacyBehavior>
                          {link}
                        </NextLink>
                      ) : (
                        link
                      )
                    }}
                  />
                )}

                {showReadSpeaker && (
                  <Webreader
                    marginTop={breadcrumbItems?.length ? 3 : 0}
                    marginBottom={breadcrumbItems?.length ? 0 : 3}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore make web strict
                    readId={null}
                    readClass="rs_read"
                  />
                )}
              </GridColumn>
            </GridRow>
          </GridContainer>

          <Box className="rs_read" paddingTop={fullWidthContent ? 0 : 4}>
            {/* Main content below */}
            <Box
              paddingTop={0}
              style={{ gap: '2.5rem' }}
              display="flex"
              flexDirection={'column'}
            >
              <GridContainer>
                <GridRow>
                  <GridColumn
                    span={['9/9', '9/9', '9/9']}
                    offset={['0', '0', '0']}
                  >
                    <Box>
                      <Text
                        variant="h1"
                        paddingBottom={2}
                        dataTestId="heading1"
                      >
                        {t(lang, 'returnAndLevy')}
                      </Text>
                      <Text variant="default">
                        {t(lang, 'returnAndLevyDesc')}
                      </Text>
                    </Box>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn
                    paddingTop={6}
                    span={['9/9', '9/9', '9/9']}
                    offset={['0', '0', '0']}
                  >
                    <Box
                      width="full"
                      display={'flex'}
                      flexDirection={'row'}
                      justifyContent={'spaceBetween'}
                      alignItems={'center'}
                      style={{ backgroundColor: '#F2F7FF' }}
                      padding={3}
                    >
                      <Text variant={'h3'} as="h3" color={'blue600'}>
                        Skila skattframtali
                      </Text>

                      <Button
                        onClick={() =>
                          router.push(
                            'http://localhost:4242/umsoknir/skattframtal',
                          )
                        }
                      >
                        <Box display={'flex'} style={{ gap: '0.5rem' }}>
                          Opna skattframtal
                          <Icon icon="open" type="outline" />
                        </Box>
                      </Button>
                    </Box>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn
                    paddingTop={6}
                    span={['9/9', '9/9', '9/9']}
                    offset={['0', '0', '0']}
                  >
                    <Box>
                      <Text variant="h3" paddingBottom={2}>
                        {t(lang, 'instructions2024')}
                      </Text>
                      <Text variant="default" paddingBottom={2}>
                        {t(lang, 'instructions2024Desc')}
                      </Text>
                      <Button variant="text" icon="arrowForward">
                        {t(lang, 'readMore')}
                      </Button>
                    </Box>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn
                    paddingTop={6}
                    span={['9/9', '9/9', '9/9']}
                    offset={['0', '0', '0']}
                  >
                    <Box>
                      <Text variant="h3" paddingBottom={2}>
                        {t(lang, 'read')}
                      </Text>
                      <Text variant="default" paddingBottom={2}>
                        {t(lang, 'readResultsDesc')}
                      </Text>
                      <Button variant="text" icon="arrowForward">
                        {t(lang, 'readMore')}
                      </Button>
                    </Box>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn
                    paddingTop={6}
                    span={['9/9', '9/9', '9/9']}
                    offset={['0', '0', '0']}
                  >
                    <Box>
                      <Text variant="h3" paddingBottom={2}>
                        {t(lang, 'electronicIdAndWebKeys')}
                      </Text>
                      <Text variant="default" paddingBottom={2}>
                        {t(lang, 'electronicIdDesc')}
                      </Text>
                      <Button variant="text" icon="arrowForward">
                        {t(lang, 'readMore')}
                      </Button>
                    </Box>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn
                    paddingTop={6}
                    span={['9/9', '9/9', '9/9']}
                    offset={['0', '0', '0']}
                  >
                    <Box>
                      <Text variant="h3" paddingBottom={2}>
                        {t(lang, 'taxSlip')}
                      </Text>
                      <Text variant="default" paddingBottom={2}>
                        {t(lang, 'taxSlipDesc')}
                      </Text>
                      <Button variant="text" icon="arrowForward">
                        {t(lang, 'readMore')}
                      </Button>
                    </Box>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn
                    paddingTop={6}
                    span={['9/9', '9/9', '9/9']}
                    offset={['0', '0', '0']}
                  >
                    <Box
                      width="full"
                      display={'flex'}
                      flexDirection={'row'}
                      justifyContent={'spaceBetween'}
                      alignItems={'center'}
                      style={{ backgroundColor: '#F2F7FF' }}
                      padding={3}
                    >
                      <Text variant={'h3'} as="h3" color={'blue600'}>
                        {t(lang, 'olderTaxReturns')}
                      </Text>

                      <Button
                      //onClick={() => router.push(applicationUrlParser())}
                      >
                        <Box display={'flex'} style={{ gap: '0.5rem' }}>
                          {t(lang, 'openMyPages')}
                          <Icon icon="open" type="outline" />
                        </Box>
                      </Button>
                    </Box>
                  </GridColumn>
                </GridRow>
                <Hidden above="sm">
                  <GridRow>
                    <GridColumn
                      paddingTop={6}
                      span={['9/9', '9/9', '9/9']}
                      offset={['0', '0', '0']}
                    >
                      <Box className={{ borderRadius: '15px' }}>
                        <img
                          src={'/assets/people_on_laptop.png'}
                          alt={
                            'Two people sitting and working on their laptops'
                          }
                          style={{ borderRadius: '15px' }}
                        />
                      </Box>
                      <Text variant="eyebrow">{t(lang, 'pictureText')}</Text>
                    </GridColumn>
                  </GridRow>
                </Hidden>
              </GridContainer>
            </Box>
          </Box>
        </SidebarLayout>
      )}
    </>
  )
}

TaxReturnPage.getProps = async ({ query, apolloClient, locale }) => {
  return {
    locale,
  }
}

export default TaxReturnPage
