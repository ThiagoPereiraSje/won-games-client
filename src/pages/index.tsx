import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { gql } from '@apollo/client'
import { initializeApollo } from 'utils/graphql/apolloClient'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps & { data: any }) {
  if (props.data)
    return (
      <p style={{ backgroundColor: 'white' }}>
        {JSON.stringify(props.data, null, 2)}
      </p>
    )

  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const props: HomeTemplateProps = {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock[0],
    mostPopularGames: gamesMock,
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock[1],
    upcomingMoreGames: gamesMock,
    freeHighlight: highlightMock[2],
    freeGames: gamesMock
  }

  const { data } = await apolloClient.query({ query: GET_GAMES })

  return {
    props: {
      ...props,
      data
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
