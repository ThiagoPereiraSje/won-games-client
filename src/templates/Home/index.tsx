import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'

import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />

        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} gamesColor="black" />
      </S.SectionNews>

      <S.SectionMostPopular>
        <Showcase
          title="Most Popular"
          highlight={mostPopularHighlight}
          games={mostPopularGames}
        />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Showcase title="Upcoming" games={upcomingGames} />
        <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Showcase
          title="Free Games"
          highlight={freeHighlight}
          games={freeGames}
        />
      </S.SectionFreeGames>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Home
