import { GetStaticProps } from 'next'

import { initializeApollo } from 'graphql/apolloClient'
import { GET_HOME } from 'graphql/queries/home'
import { GetHomeQuery } from 'graphql/types'

import Home, { HomeTemplateProps } from 'templates/Home'

import { BannerProps } from 'components/Banner'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetHomeQuery>({ query: GET_HOME })

  const banners: BannerProps[] = data.banners
    ? data.banners?.map((banner) => ({
        img: banner?.image?.url
          ? `http://localhost:1337${banner?.image?.url}`
          : '',
        title: banner?.title || '',
        subtitle: banner?.subtitle || '',
        buttonLabel: banner?.button?.label || '',
        buttonLink: banner?.button?.link || '',
        ribbon: banner?.ribbon?.text || '',
        ribbonColor: banner?.ribbon?.color || 'primary',
        ribbonSize: banner?.ribbon?.size || 'normal'
      }))
    : []

  return {
    revalidate: 60,
    props: {
      banners,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock[0],
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock[1],
      upcomingMoreGames: gamesMock,
      freeHighlight: highlightMock[2],
      freeGames: gamesMock
    }
  }
}

/*
Atenção:
- Os métodos getStaticProps/getServerSideProps só funcionam dentro de pages.

getStaticProps => gerar estático em build time (gatsby)
getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client)
*/
