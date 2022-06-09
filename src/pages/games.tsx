import GamesTempalte, { GamesTemplateProps } from 'templates/Games'

import mockExploreSidebarItems from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/graphql/apolloClient'
import { gql } from '@apollo/client'

const QUERY_GAMES = gql`
  query QueryGames {
    games {
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTempalte {...props} />
}

/*
 Como o conteúdo da página explore será modificado de acordo
 com a consulta realizada não faz sentido ser uma página estática
*/
export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: QUERY_GAMES
  })

  // console.log('GAMES: ', data.games)

  const games = data.games.map((game: any) => ({
    title: game.name,
    // developer: game.developers[0]?.name,
    img: `http://localhost:1337${game.cover.url}`,
    price: new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD'
    }).format(game.price)
  }))

  const props: GamesTemplateProps = {
    filterItems: mockExploreSidebarItems,
    games
  }

  return {
    props: {
      ...props,
      revalidate: 60
    }
  }
}

/*
data.games.map((game: any) => ({
      title: game.name,
      developer: game.developers[0]?.name,
      img: `http://localhost:1337${game.cover.url}`,
      price: new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(game.price)
    }))
*/
