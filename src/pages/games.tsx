import GamesTempalte, { GamesTemplateProps } from 'templates/Games'
import { GetGamesQuery, GetGamesQueryVariables } from 'graphql/types'

import { GET_GAMES } from 'graphql/queries/games'
import { GameCardProps } from 'components/GameCard'
import { initializeApollo } from 'graphql/apolloClient'
import mockExploreSidebarItems from 'components/ExploreSidebar/mock'

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
        title: game?.name || '',
        developer: game?.developers
          ? game.developers[0]?.name || 'Unknown'
          : 'Unknown',
        img: game?.cover?.url ? `http://localhost:1337${game?.cover?.url}` : '',
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game?.price || 0)
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
