import React from 'react'
import type { GetServerSidePropsContext, NextPageContext } from 'next'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { Locale } from '@island.is/shared/types'

import { ErrorPageQuery, ErrorPageQueryVariables } from '../graphql/schema'
import withApollo from '../graphql/withApollo'
import { getLocaleFromPath } from '../i18n'
import I18n from '../i18n/I18n'
import Layout, { LayoutProps } from '../layouts/main'
import { ErrorScreen } from '../screens/Error'
import { GET_ERROR_PAGE } from '../screens/queries'
import { fetch404RedirectUrl } from '../utils/fetch404RedirectUrl'

const layoutPropsConst = {
  categories: [
    {
      __typename: 'ArticleCategory',
      id: '2OoQq3F7rTAzrSJbRwE8QM',
      title: 'Akstur og ökutæki',
      description:
        'Ökuskírteini, númeraplötur, eigendaskipti, skráningar, tjón, tengivagnar og fleira.',
      slug: 'akstur-og-bifreidar',
    },
    {
      __typename: 'ArticleCategory',
      id: '2lICg7uJ85xKAZrVXD7lyj',
      title: 'Atvinnurekstur og sjálfstætt starfandi',
      description:
        'Stofnun fyrirtækja og sjóða, launagreiðslur, gjaldþrot, löggildingar, starfsleyfi, vinnuvernd og fleira.',
      slug: 'atvinnurekstur-og-sjalfstaett-starfandi',
    },
    {
      __typename: 'ArticleCategory',
      id: '28CHpPSLPzLFHM4TCk9EG1',
      title: 'Dómstólar og réttarfar',
      description:
        'Upplýsingar fyrir brotaþola, sakborninga og vitni, sakaskrá, bætur, tegundir dómsmála, afplánun, sektir. ',
      slug: 'domstolar-og-rettarfar',
    },
    {
      __typename: 'ArticleCategory',
      id: '41qVkgL5848NWjSz8c0nD6',
      title: 'Fjármál og skattar',
      description: 'Skuldir, skattar, fylgigögn og skattaafslættir',
      slug: 'fjarmal-og-skattar',
    },
    {
      __typename: 'ArticleCategory',
      id: '5hzyROVtFhH2CWtNHcjqzk',
      title: 'Fjölskylda og velferð',
      description:
        'Fæðingarorlof, nöfn, forsjá, gifting, skilnaður, aldraðir, andlát.',
      slug: 'fjolskylda-og-velferd',
    },
    {
      __typename: 'ArticleCategory',
      id: '5nP75UwjhAE1dlQOXFfxuj',
      title: 'Heilbrigðismál',
      description:
        'Sjúkratryggingar, sjúkradagpeningar, lyfjamál, lækningaleyfi, landlæknir og fleira ',
      slug: 'heilbrigdismal',
    },
    {
      __typename: 'ArticleCategory',
      id: 'teF87IXO11p9PU0e19bPm',
      title: 'Húsnæðismál',
      description:
        'Eigendur, leigjendur, fasteignagjöld, húsnæðislán, landeignir og fleira',
      slug: 'husnaedismal',
    },
    {
      __typename: 'ArticleCategory',
      id: '5BDC5QrYiozzt4Pbkw2ruE',
      title: 'Iðnaður',
      description:
        'Fiskveiði, landbúnaður, björgunarbúnaður, skipagögn, fiskveiði, hafnir, starfsleyfi, Byggðastofnun, Umhverfisstofnun.',
      slug: 'idnadur',
    },
    {
      __typename: 'ArticleCategory',
      id: '2uddEpWhsRU0DxTIRTgDHD',
      title: 'Innflytjendamál og áritanir',
      description:
        'Áritanir, dvalarleyfi, atvinnuleyfi, ríkisborgararéttur, alþjóðleg vernd, skráning í þjóðskrá og fleira',
      slug: 'innflytjendamal',
    },
    {
      __typename: 'ArticleCategory',
      id: '6AjCCL5HigiTHi4jr0zQtL',
      title: 'Launþegi, réttindi og lífeyrir',
      description:
        'Atvinnuleysi, frídagar, veikindaleyfi, lífeyrir, réttindi starfsmanna og fleira',
      slug: 'launthegi-rettindi-og-lifeyrir',
    },
    {
      __typename: 'ArticleCategory',
      id: '5YT8zuNkLrvhXG5D68WMKz',
      title: 'Málefni fatlaðs fólks',
      description:
        'Greining, fjárhagsaðstoð, félagsþjónusta, örorka og réttindi.',
      slug: 'malefni-fatlads-folks',
    },
    {
      __typename: 'ArticleCategory',
      id: '742Z1gxEtORwcfzURDSEeq',
      title: 'Menntun',
      description: 'Skólakerfið, starfsnám, styrkir og lán',
      slug: 'menntun',
    },
    {
      __typename: 'ArticleCategory',
      id: '3LbTJPXgQPhOEKVU0qNegU',
      title: 'Neytendamál',
      description:
        'Kaup á vörum og þjónustu, réttaraðstoð, vöruöryggi og faggilding.',
      slug: 'neytendamal',
    },
    {
      __typename: 'ArticleCategory',
      id: '1x8EfY1JmPPAVvFFWmKl2b',
      title: 'Samfélag og réttindi',
      description:
        'Trúmál, kosningar, ríkisfang, lögræði, mannréttindi og fleira',
      slug: 'samfelag-og-rettindi',
    },
    {
      __typename: 'ArticleCategory',
      id: '7cRCrpwuqPgiVOELwuc3uy',
      title: 'Samgöngur',
      description:
        'Farþegar, farþegaflutningar, flug, flugvellir, skip og fleira',
      slug: 'samgongur',
    },
    {
      __typename: 'ArticleCategory',
      id: '41negTs7leYMHIKif0Yni6',
      title: 'Umhverfismál',
      description:
        'Almannavarnir, náttúruvá, veiðileyfi, mengun, sinubruni og fleira',
      slug: 'umhverfismal',
    },
    {
      __typename: 'ArticleCategory',
      id: '3EvnJkZSkQNnaIYB3rjDKX',
      title: 'Vegabréf, ferðalög og búseta erlendis',
      description:
        'Vegabréf, evrópska sjúkrakortið, sjúkratryggingar, almannatryggingar á milli landa, störf erlendis.',
      slug: 'vegabref-ferdalog-og-buseta-erlendis',
    },
    {
      __typename: 'ArticleCategory',
      id: '6nbGohq5VnJiDVPEcqfGY0',
      title: 'Þjónusta Ísland.is',
      description:
        'Ráðgjöf, vörur og þjónusta sem Stafrænt Ísland veitir fyrirtækjum og stofnunum',
      slug: 'thjonusta-island-is',
    },
  ],
  alertBannerContent: {
    __typename: 'AlertBanner',
    showAlertBanner: false,
    bannerVariant: 'warning',
    title: 'Truflanir á rafrænum skilríkjum',
    description:
      'Vegna viðhalds má búast við truflunum í nótt frá 00:00-06:00 á rafrænum skilríkjum á símkorti (þetta á ekki við um Auðkennis-app eða skilríki á korti)',
    linkTitle: '',
    link: {
      __typename: 'ReferenceLink',
      slug: '',
      type: 'linkUrl',
    },
    isDismissable: true,
    dismissedForDays: 2,
  },
  footerUpperInfo: [
    {
      title: 'Stafrænt Ísland',
      href: '/s/stafraent-island',
    },
    {
      title: 'Opinberir aðilar',
      href: '/s',
    },
  ],
  footerUpperContact: [
    {
      title: 'Getum við aðstoðað?',
      href: '/adstod',
    },
  ],
  footerLowerMenu: [
    {
      title: 'Samráðsgátt',
      href: '/samradsgatt',
    },
    {
      title: 'Undirskriftalistar',
      href: '/undirskriftalistar',
    },
    {
      title: 'Opnir reikningar ríkisins',
      href: 'http://www.opnirreikningar.is/',
    },
    {
      title: 'Tekjusagan',
      href: 'https://tekjusagan.is/',
    },
    {
      title: 'Ríkisreikningur',
      href: 'https://rikisreikningur.is/',
    },
    {
      title: 'Eldri Mínar síður',
      href: '/eldri-minar-sidur',
    },
  ],
  footerTagsMenu: [
    {
      title: 'Mannanöfn',
      href: '/mannanofn',
    },
    {
      title: 'Fæðingarorlof',
      href: '/flokkur/fjolskylda-og-velferd#faedingarorlof-og-skraning-barns',
    },
  ],
  footerMiddleMenu: [
    {
      title: 'Akstur og bifreiðar.',
      href: '/flokkur/akstur-og-bifreidar',
    },
    {
      title: 'Atvinnurekstur og sjálfstætt starfandi',
      href: '/flokkur/atvinnurekstur-og-sjalfstaett-starfandi',
    },
    {
      title: 'Dómstólar og réttarfar',
      href: '/flokkur/domstolar-og-rettarfar',
    },
    {
      title: 'Fjármál og skattar',
      href: '/flokkur/fjarmal-og-skattar',
    },
    {
      title: 'Fjölskylda og velferð',
      href: '/flokkur/fjolskylda-og-velferd',
    },
    {
      title: 'Heilbrigðismál',
      href: '/flokkur/heilbrigdismal',
    },
    {
      title: 'Húsnæðismál',
      href: '/flokkur/husnaedismal',
    },
    {
      title: 'Iðnaður',
      href: '/flokkur/idnadur',
    },
    {
      title: 'Innflytjendamál',
      href: '/flokkur/innflytjendamal',
    },
    {
      title: 'Launþegi, réttindi og lífeyrir',
      href: '/flokkur/launthegi-rettindi-og-lifeyrir',
    },
    {
      title: 'Málefni fatlaðs fólks',
      href: '/flokkur/malefni-fatlads-folks',
    },
    {
      title: 'Menntun',
      href: '/flokkur/menntun',
    },
    {
      title: 'Neytendamál',
      href: '/flokkur/neytendamal',
    },
    {
      title: 'Samfélag og réttindi',
      href: '/flokkur/samfelag-og-rettindi',
    },
    {
      title: 'Samgöngur',
      href: '/flokkur/samgongur',
    },
    {
      title: 'Umhverfismál',
      href: '/flokkur/umhverfismal',
    },
    {
      title: 'Vegabréf, ferðalög og búseta erlendis',
      href: '/flokkur/vegabref-ferdalog-og-buseta-erlendis',
    },
  ],
  namespace: {
    login: 'Mínar síður',
    title: 'Ísland.is',
    gotoTop: 'Fara efst',
    seeMore: 'Sjá meira',
    readMore: 'Lesa nánar',
    siteTitle: 'Stafrænt Ísland',
    termsHref: '/skilmalar-island-is',
    filterOpen: 'Opna síu',
    termsTitle: 'Notendaskilmálar',
    canWeAssist: 'Getum við aðstoðað?',
    description:
      'Ísland.is er upplýsinga- og þjónustuveita opinberra aðila á Íslandi. Þar getur fólk og fyrirtæki fengið upplýsingar og notið margvíslegrar þjónustu hjá opinberum aðilum á einum stað í gegnum eina gátt.',
    filterClear: 'Hreinsa síu',
    filterClose: 'Loka síu',
    menuCaption: 'Valmynd',
    error404Body:
      'Ekkert fannst á slóðinni {PATH}. Mögulega hefur síðan verið fjarlægð eða færð til. Þú getur byrjað aftur frá forsíðu eða notað leitina til að finna upplýsingar.',
    error500Body:
      'Eitthvað fór úrskeiðis. Villan hefur verið skráð og unnið verður að viðgerð eins fljótt og auðið er.',
    seeMoreItems: 'Sjá fleiri',
    carouselTitle: 'Flettiborði',
    contactUsText: 'Hafa samband',
    error404Title: 'Síða eða skjal fannst ekki.',
    error500Title: 'Afsakið hlé',
    filterResults: 'Sjá niðurstöður',
    organizations: 'Opinberir aðilar',
    filterClearAll: 'Hreinsa allar síur',
    mobileAppTitle: 'Ísland.is appið',
    alertBannerTitle: 'Tilkynning',
    breadcrumbsTitle: 'Brauðmolar',
    footerRightLabel: 'Flýtileiðir',
    howCanWeHelpText: 'Hvernig getum við aðstoðað?',
    loginDelegations: 'Fyrirtæki og umboð',
    loginIndividuals: 'Einstaklingar',
    popularQuestions: 'Algengar spurningar',
    searchButtonAria: 'Leita',
    stofnanirHeading: 'Stofnanir',
    answersByCategory: 'Svör eftir flokkum',
    footerMiddleLabel: 'Þjónustuflokkar',
    frontpageTabsNext: 'Næsta glæra',
    mobileAppDownload: 'Sækja',
    mobileAppSubtitle: 'Með ríkið í vasanum',
    otherLanguageAria: 'Change language to english',
    otherLanguageCode: 'en',
    otherLanguageName: 'EN',
    privacyPolicyHref: '/s/stafraent-island/personuverndarstefna-island-is',
    searchPlaceholder: 'Leitaðu á Ísland.is',
    searchSuggestions: [
      'Covid -19',
      'Ökuskírteini',
      'Atvinnuleysisbætur',
      'Fæðingarorlof',
      'Rekstrarleyfi',
      'Heimilisfang',
    ],
    serviceCategories: 'Þjónustuflokkar',
    siteExternalTitle: 'Aðrir opinberir vefir',
    skipToMainContent: 'Fara beint í efnið',
    mobileAppLinkApple: 'https://apple.co/3P2NP2e',
    privacyPolicyTitle: 'Persónuverndarstefna IS',
    searchQuickConnect: 'Beint að efninu',
    serviceWebFormTitle: 'Hvers efnis er erindið?',
    mobileAppLinkAndroid:
      'https://play.google.com/store/apps/details?id=is.island.app',
    newsAndAnnouncements: 'Fréttir og tilkynningar',
    assistanceForIslandIs: 'Aðstoð fyrir Ísland.is',
    frontpageTabsPrevious: 'Fyrri glæra',
    filterInputPlaceholder: 'Sía eftir leitarorði',
    alertBannerDismissLabel: 'Loka tilkynningu',
    switchToEnglishModalText:
      'The page you are viewing does not have an English translation yet. You can keep viewing the Icelandic version of the page or go to our home page in English.',
    switchToEnglishModalTitle: 'Translation not available',
    serviceWebFormSuccessTitle: 'Takk fyrir',
    cantFindWhatYouAreLookingForText: 'Finnurðu ekki það sem þig vantar?',
    serviceWebFormSuccessDescription:
      'Erindi þínu hefur verið komið áleiðis til okkar.',
    icelandHealthHeilbrigdisthjonustaDescription:
      'Þjálfun, lýtalækningar, innlend tannmál, ferðakostnaður, hjúkrunarheimili, heilsugæsla, greiðsluþátttökukerfi, leguskrá, heilbrigðisstarfsfólk og ljósmæður',
  },
  respOrigin: 'http://localhost:4200',
  megaMenuData: {
    asideTopLinks: [
      {
        text: 'Stafrænt Ísland',
        href: '/s/stafraent-island',
        sub: [],
      },
      {
        text: 'Þjónusta Ísland.is',
        href: '/s/stafraent-island/thjonustur',
        sub: [],
      },
      {
        text: 'Opinberir aðilar',
        href: '/s',
        sub: [],
      },
      {
        text: 'Þróun',
        href: '/stofnanir/stafraent-island/throun',
        sub: [
          {
            text: 'Efnisstefna',
            href: '/s/stafraent-island/efnisstefna',
            sub: null,
          },
          {
            text: 'Aðgengisstefna',
            href: '/s/stafraent-island/adgengismal',
            sub: null,
          },
          {
            text: 'Hönnunarkerfi',
            href: '/s/stafraent-island/honnunarkerfi',
            sub: null,
          },
          {
            text: 'Tæknistefna',
            href: '/s/stafraent-island/taeknistefna',
            sub: null,
          },
          {
            text: 'Vefþjónustustefna',
            href: '/s/stafraent-island/vefthjonustustefna',
            sub: null,
          },
          {
            text: 'Þróunarhandbók',
            href: '/s/stafraent-island/throunarhandbok',
            sub: null,
          },
        ],
      },
    ],
    asideBottomTitle: 'Aðrir opinberir vefir',
    asideBottomLinks: [
      {
        text: 'Samráðsgátt',
        href: '/samradsgatt',
        sub: [],
      },
      {
        text: 'Undirskriftalistar',
        href: '/undirskriftalistar',
        sub: [],
      },
      {
        text: 'Opnir reikningar ríkisins',
        href: 'http://www.opnirreikningar.is/',
        sub: [],
      },
      {
        text: 'Tekjusagan',
        href: 'https://tekjusagan.is/',
        sub: [],
      },
      {
        text: 'Eldri Mínar síður',
        href: '/eldri-minar-sidur',
        sub: [],
      },
    ],
    mainLinks: [
      {
        text: 'Akstur og ökutæki',
        href: '/flokkur/akstur-og-bifreidar',
      },
      {
        text: 'Atvinnurekstur og sjálfstætt starfandi',
        href: '/flokkur/atvinnurekstur-og-sjalfstaett-starfandi',
      },
      {
        text: 'Dómstólar og réttarfar',
        href: '/flokkur/domstolar-og-rettarfar',
      },
      {
        text: 'Fjármál og skattar',
        href: '/flokkur/fjarmal-og-skattar',
      },
      {
        text: 'Fjölskylda og velferð',
        href: '/flokkur/fjolskylda-og-velferd',
      },
      {
        text: 'Heilbrigðismál',
        href: '/flokkur/heilbrigdismal',
      },
      {
        text: 'Húsnæðismál',
        href: '/flokkur/husnaedismal',
      },
      {
        text: 'Iðnaður',
        href: '/flokkur/idnadur',
      },
      {
        text: 'Innflytjendamál og áritanir',
        href: '/flokkur/innflytjendamal',
      },
      {
        text: 'Launþegi, réttindi og lífeyrir',
        href: '/flokkur/launthegi-rettindi-og-lifeyrir',
      },
      {
        text: 'Málefni fatlaðs fólks',
        href: '/flokkur/malefni-fatlads-folks',
      },
      {
        text: 'Menntun',
        href: '/flokkur/menntun',
      },
      {
        text: 'Neytendamál',
        href: '/flokkur/neytendamal',
      },
      {
        text: 'Samfélag og réttindi',
        href: '/flokkur/samfelag-og-rettindi',
      },
      {
        text: 'Samgöngur',
        href: '/flokkur/samgongur',
      },
      {
        text: 'Umhverfismál',
        href: '/flokkur/umhverfismal',
      },
      {
        text: 'Vegabréf, ferðalög og búseta erlendis',
        href: '/flokkur/vegabref-ferdalog-og-buseta-erlendis',
      },
      {
        text: 'Þjónusta Ísland.is',
        href: '/flokkur/thjonusta-island-is',
      },
    ],
  },
} as unknown as LayoutProps

type ErrorPageProps = {
  statusCode: number
  locale: Locale
  layoutProps: LayoutProps
  errorPage: ErrorPageQuery['getErrorPage']
}

type ErrorPageInitialProps = {
  apolloClient: ApolloClient<NormalizedCacheObject>
  locale: string
} & NextPageContext

class ErrorPage extends React.Component<ErrorPageProps> {
  state = { renderError: false }

  static getDerivedStateFromError(_error: Error) {
    // This means we had an error rendering the error page - We'll attempt to
    // render again with a simpler version
    return { renderError: true }
  }

  render() {
    const { layoutProps, locale, statusCode, errorPage } = this.props
    const { renderError } = this.state

    if (layoutProps && !renderError) {
      // getDerivedStateFromError catches client-side render errors, but we need
      // try-catch for server-side rendering
      try {
        return (
          <I18n locale={locale} translations={layoutProps.namespace}>
            <Layout {...layoutProps}>
              <ErrorScreen errPage={errorPage} statusCode={statusCode} />
            </Layout>
          </I18n>
        )
        // eslint-disable-next-line no-empty
      } catch {}
    }

    // fallback to simpler version if we're unable to use the Layout for any reason
    return <ErrorScreen errPage={errorPage} statusCode={statusCode} />
  }

  static async getProps(props: ErrorPageInitialProps) {
    const { err, res, asPath = '' } = props
    const statusCode = err?.statusCode ?? res?.statusCode ?? 500
    const locale = getLocaleFromPath(asPath)

    if (statusCode === 404) {
      const redirectUrl = await fetch404RedirectUrl(
        props.apolloClient,
        asPath,
        props.locale as Locale,
      )

      if (redirectUrl) {
        const isBrowser = typeof window !== 'undefined'
        if (isBrowser) {
          window.location.href = redirectUrl
        } else {
          res?.writeHead(302, { Location: redirectUrl })
          res?.end()
        }
      }
    }

    if (err) {
      console.error(err)
    }

    if (res) {
      res.statusCode = statusCode
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore make web strict
    let layoutProps: LayoutProps = null
    let pageProps: ErrorPageQuery['getErrorPage'] = null

    try {
      const [layoutPropsResponse, pagePropsResponse] = await Promise.all([
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore make web strict
        Layout.getProps({
          ...props,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore make web strict
          res: props.res,
          req: props.req as unknown as GetServerSidePropsContext['req'],
          locale,
        }),
        props.apolloClient.query<ErrorPageQuery, ErrorPageQueryVariables>({
          query: GET_ERROR_PAGE,
          variables: {
            input: {
              errorCode: statusCode?.toString() ?? '500',
              lang: locale,
            },
          },
        }),
      ])
      layoutProps = layoutPropsResponse
      pageProps = pagePropsResponse?.data?.getErrorPage
    } catch {
      return {
        statusCode: 200,
        locale: 'is',
        layoutProps: layoutPropsConst,
      }
      console.error(
        new Error(`_error.tsx getInitialProps missing data at path: ${asPath}`),
      )
    }

    return {
      statusCode,
      locale,
      layoutProps,
      errorPage: pageProps,
    }
  }
}

const Screen = withApollo(ErrorPage)

const ScreenWithGetInitialProps: typeof Screen & {
  getInitialProps?: typeof Screen.getProps
} = Screen

ScreenWithGetInitialProps.getInitialProps = Screen.getProps

export default ScreenWithGetInitialProps
