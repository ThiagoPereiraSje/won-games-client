import { initializeApollo } from 'graphql/apolloClient'
import { GET_GAMES } from 'graphql/queries/games'
import { GetGamesQuery, GetGamesQueryVariables } from 'graphql/types'

import GamesTempalte, { GamesTemplateProps } from 'templates/Games'

import mockExploreSidebarItems from 'components/ExploreSidebar/mock'
import { GameCardProps } from 'components/GameCard'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTempalte {...props} />
}

/*
 Como o conteúdo da página explore será modificado de acordo
 com a consulta realizada não faz sentido ser uma página estática
*/
export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<
    GetGamesQuery,
    GetGamesQueryVariables
  >({
    query: GET_GAMES,
    variables: {
      limit: 9
    }
  })

  const games: GameCardProps[] | undefined = data
    ? data?.games?.map((game) => ({
        slug: game?.slug || '',
        title: game?.name || '',
        developer: game?.developers
          ? game.developers[0]?.name || 'Unknown'
          : 'Unknown',
        img: game?.cover?.url ? `http://localhost:1337${game?.cover?.url}` : '',
        price: game?.price || 0
      }))
    : undefined

  return {
    props: {
      revalidate: 60,
      filterItems: mockExploreSidebarItems,
      games
    }
  }
}
