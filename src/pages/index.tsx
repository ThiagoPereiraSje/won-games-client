import Home, { HomeTemplateProps } from 'templates/Home'

import banners from 'components/BannerSlider/mock'
import newGames from 'components/GameCardSlider/mock'
import highlistData from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners,
      newGames,
      mostPopularHighlight: highlistData[0],
      mostPopularGames: newGames,
      upcommingGames: newGames,
      upcommingHighlight: highlistData[1],
      upcommingMoreGames: newGames,
      freeHighlight: highlistData[2],
      freeGames: newGames
    }
  }
}

// export function getServerSideProps() {
//   return {
//     props: {
//       heading: 'olá com ssr'
//     }
//   }
// }

/*
Atenção:
- Os métodos getStaticProps/getServerSideProps só funcionam dentro de pages.

getStaticProps => gerar estático em build time
getServerSideProps => gerar via ssr a cada request
getInitialProps => gerar via ssr a cada request
*/
