import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import NextLink from 'next/link'

import {
  Box,
  BreadCrumbItem,
  Breadcrumbs,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Icon,
  LinkV2,
  Navigation,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import { theme } from '@island.is/island-ui/theme'
import {
  HeadWithSocialSharing,
  Sticky,
  Webreader,
} from '@island.is/web/components'
import { withMainLayout } from '@island.is/web/layouts/main'
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
  const indexableBySearchEngine = false
  const fullWidthContent = false
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState<boolean | undefined>(false)

  useEffect(() => {
    setIsMobile(width < theme.breakpoints.md)
  }, [width])

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
    text: 'Einstaklingar',
  }

  return (
    <>
      <HeadWithSocialSharing
        title={`${'Skattframtal'}${'meta description'}`}
        description={'Page description'}
        imageUrl={'Image url'}
        imageContentType={'Image content type'}
        imageWidth={'1200'}
        imageHeight={'600'}
      >
        {!indexableBySearchEngine && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </HeadWithSocialSharing>
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
                  activeItemTitle={'Efnisyfirlit'}
                  //   renderLink={(link, item) => {
                  //     return !item?.href || shouldLinkBeAnAnchorTag(item.href) ? (
                  //       link
                  //     ) : (
                  //       <NextLink href={item.href} legacyBehavior>
                  //         {link}
                  //       </NextLink>
                  //     )
                  //   }}
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
                    <Text color="dark400">{t(lang, 'taxLawLibrary')}</Text>
                    <Text color="dark400">{t(lang, 'rentalIncome')}</Text>
                    <Text color="dark400">{t(lang, 'electronicId')}</Text>
                    <Text color="dark400">{t(lang, 'childBenefits')}</Text>
                    <Text color="dark400">{t(lang, 'personalDiscount')}</Text>
                    <Text color="dark400">{t(lang, 'perDiem')}</Text>
                    <Text color="dark400">{t(lang, 'firstApartment')}</Text>
                    <Text color="dark400">{t(lang, 'vehicleImport')}</Text>
                  </Stack>
                </Box>
              </Box>
            </Sticky>
          }
        >
          {isMobile && (
            <Box className={styles.menuStyle}>
              {/* {showExternalLinks && (
                <OrganizationExternalLinks
                  organizationPage={organizationPage}
                  showOnMobile={true}
                />
              )} */}
              <Box marginY={2}>
                <Navigation
                  baseId="pageNavMobile"
                  isMenuDialog={true}
                  items={navItems}
                  title={t(lang, 'toc')}
                  activeItemTitle={'Efnisyfirlit'}
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
                      <Text variant="h1" paddingBottom={2}>
                        Framtal og álagning
                      </Text>
                      <Text variant="default">
                        Í þessum kafla er fjallað ítarlega um forsendur
                        álagningar allra gjalda, sem ríkisskattstjóri leggur á
                        samkvæmt skattframtali. Einnig forsendur fyrir ákvörðun
                        bóta. Þá leggur ríkisskattstjóri áherslu á rafræn skil
                        skattgagna og er hér að finna upplýsingar um rafrænar
                        skilaleiðir og um veflykla, hlutverk þeirra og virkni.
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
                      //onClick={() => router.push(applicationUrlParser())}
                      >
                        <Box display={'flex'} style={{ gap: '0.5rem' }}>
                          Sækja um
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
                        Framtalsleiðbeiningar 2024
                      </Text>
                      <Text variant="default" paddingBottom={2}>
                        Leiðbeiningar um útfyllingu skattframtals einstaklinga
                        eru nær eingöngu sóttar á netið. Hægt er að fá
                        leiðbeiningarnar á pappír með því að sækja þær í næstu
                        starfsstöð Skattsins, en þær eru ekki bornar út. Þegar
                        talið er fram á vefnum eru framtalsleiðbeiningar alltaf
                        við höndina.
                      </Text>
                      <Button variant="text" icon="arrowForward">
                        Lesa meira
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
                        Að lesa úr álagningunni
                      </Text>
                      <Text variant="default" paddingBottom={2}>
                        Álagning opinberra gjalda einstaklinga fer fram í lok
                        maí ár hvert. Niðurstöður álagningar eru birtar á
                        þjónustuvef skattsins.
                      </Text>
                      <Button variant="text" icon="arrowForward">
                        Lesa meira
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
                        Rafræn skilríki og veflyklar
                      </Text>
                      <Text variant="default" paddingBottom={2}>
                        Veflykill er aðgangsorð, gefið út af ríkisskattstjóra,
                        fyrir rafræn samskipti við skattyfirvöld. Allir
                        einstaklingar og félög eiga veflykla. Rafræn skilríki
                        eiga með tímanum að leysa drjúgan hluta veflykla af
                        hólmi.
                      </Text>
                      <Button variant="text" icon="arrowForward">
                        Lesa meira
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
                        Álagningarseðill og forsendur 2025
                      </Text>
                      <Text variant="default" paddingBottom={2}>
                        Opinber gjöld einstaklinga eru lögð á samkvæmt framtali
                        og barnabætur og vaxtabætur eru einnig ákvarðaðar
                        samkvæmt framtali. Forsendur eru margvíslegar; tekjur og
                        eignir vegna helstu skattanna, fjölskyldustaða vegna
                        bóta og aldur er ein forsenda t.d. útvarpsgjalds.
                        Niðurstöður eru birtar á álagningarseðli.
                      </Text>
                      <Button variant="text" icon="arrowForward">
                        Lesa meira
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
                      <img
                        src={'/assets/people_on_laptop.png'}
                        alt={'Two people sitting and working on their laptops'}
                      />
                    </Box>
                    <Text variant="eyebrow">
                      Mynd sem sýnir tvær manneskjur að vinna í fartölvu
                    </Text>
                  </GridColumn>
                </GridRow>
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

export default withMainLayout(TaxReturnPage, { showFooter: false })
