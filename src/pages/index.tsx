import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { useQuery, gql } from '@apollo/client'

export default function Index(props: HomeTemplateProps) {
  const { loading, error, data } = useQuery(gql`
    query getGames {
      games {
        name
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  if (data)
    return (
      <p style={{ backgroundColor: 'white' }}>
        {JSON.stringify(data, null, 2)}
      </p>
    )

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

getStaticProps => gerar estático em build time (gatsby)
getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client)
*/
