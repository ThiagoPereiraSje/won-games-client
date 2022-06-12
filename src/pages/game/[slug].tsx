import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { initializeApollo } from 'graphql/apolloClient'
import { GET_GAME_BY_SLUG, GET_GAMES } from 'graphql/queries/games'
import {
  GetGameBySlugQuery,
  GetGameBySlugQueryVariables,
  GetGamesQuery,
  GetGamesQueryVariables
} from 'graphql/types'

import Game, { GameTemplateProps } from 'templates/Game'

import { GalleryImageProps } from 'components/Gallery'
import mockGames from 'components/GameCardSlider/mock'
import { GamePlatform } from 'components/GameDetails'
import mockHighLight from 'components/Highlight/mock'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // ou uma tela de customizada
  if (router.isFallback) return <p>Loading...</p>

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    GetGamesQuery,
    GetGamesQueryVariables
  >({
    query: GET_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games?.map((game) => ({
    params: { slug: game?.slug }
  }))

  return { paths, fallback: true }
}

// Vai gerar em build time
// É preciso dizer que existem as rotas /game/bla, /game/foo e etc
// Para isso utilizamos o getStaticPaths
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    GetGameBySlugQuery,
    GetGameBySlugQueryVariables
  >({
    query: GET_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games?.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  const gallery: GalleryImageProps[] = game?.gallery
    ? game.gallery.map((img) => ({
        src: img?.src ? `http://localhost:1337${img?.src}` : '',
        label: img?.label || ''
      }))
    : []

  const platforms: GamePlatform[] = game?.platforms
    ? game.platforms.map(
        (platform) => (platform?.name as GamePlatform) || 'windows'
      )
    : []

  const genres: string[] = game?.categories
    ? game.categories.map((category) => category?.name || 'Unknown')
    : []

  const gameTemplateProps: GameTemplateProps = {
    cover: `http://localhost:1337${game?.cover?.src}`,
    gameInfo: {
      title: game?.name || '',
      price: game?.price || 0,
      description: game?.short_description || ''
    },
    gallery,
    description: game?.description || '',
    details: {
      developer: game?.developers
        ? game?.developers[0]?.name || 'Unknown'
        : 'Unknown',
      releaseDate: game?.release_date,
      platforms,
      publisher: game?.publisher?.name || 'Unknown',
      rating: game?.rating || 'BR0',
      genres
    },
    upcomingGames: mockGames,
    upcomingHighlight: mockHighLight[2],
    recommendedGames: mockGames
  }

  return {
    props: {
      revalidate: 60,
      ...gameTemplateProps
    }
  }
}
