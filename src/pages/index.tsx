import { GetStaticProps } from 'next'

import { initializeApollo } from 'graphql/apolloClient'
import { GET_HOME } from 'graphql/queries/home'
import { GetHomeQuery, GetHomeQueryVariables } from 'graphql/types'

import Home, { HomeTemplateProps } from 'templates/Home'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

type Games = Array<{
  __typename?: 'Game'
  name: string
  slug: string
  price: number
  cover: { __typename?: 'UploadFile'; url: string } | null
  developers: Array<{ __typename?: 'Developer'; name: string } | null> | null
} | null> | null

const mapGames = (games: Games): GameCardProps[] => {
  if (games && games.length) {
    return games.map((game) => ({
      slug: game?.slug || '',
      title: game?.name || '',
      developer: game?.developers
        ? game?.developers[0]?.name || 'Unknow'
        : 'Unknow',
      img: game?.cover ? `http://localhost:1337${game?.cover?.url}` : '',
      price: game?.price || 0,
      promotionalPrice: game?.price ? game.price - 10 : 0
    }))
  }

  return []
}

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<
    GetHomeQuery,
    GetHomeQueryVariables
  >({
    query: GET_HOME,
    variables: { release_date: '2022-04-20', price: 20, limit: 8 }
  })

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

  const newGames = mapGames(data.newGames)
  const upcomingGames = mapGames(data.upcomingGames)
  const freeGames = mapGames(data.freeGames)

  return {
    revalidate: 60,
    props: {
      banners,
      newGames,
      mostPopularHighlight: highlightMock[0],
      mostPopularGames: gamesMock,
      upcomingGames,
      upcomingHighlight: highlightMock[1],
      upcomingMoreGames: gamesMock,
      freeHighlight: highlightMock[2],
      freeGames
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
