import Base from 'templates/Base'
import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
// import * as S from './styles'

export type WishlistTempalteProps = {
  games?: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Wishlist = ({
  games,
  recommendedHighlight,
  recommendedGames
}: WishlistTempalteProps) => {
  return (
    <Base>
      <Container>
        <Heading lineColor="secondary" lineLeft>
          Wishlist
        </Heading>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Container>

      <Showcase
        title="You may like these games"
        highlight={recommendedHighlight}
        games={recommendedGames}
      />
    </Base>
  )
}

export default Wishlist
