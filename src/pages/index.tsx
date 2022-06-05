import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export default function Index(props: HomeTemplateProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  client.query({
    query: gql`
      query getGames {
        games {
          name
        }
      }
    `
  })

  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
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
  }
}

/*
Atenção:
- Os métodos getStaticProps/getServerSideProps só funcionam dentro de pages.

getStaticProps => gerar estático em build time
getServerSideProps => gerar via ssr a cada request
getInitialProps => gerar via ssr a cada request
*/
