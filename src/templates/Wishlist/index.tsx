import Base from 'templates/Base'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
// import * as S from './styles'

export type WishlistTempalteProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Wishlist = ({
  recommendedHighlight,
  recommendedGames
}: WishlistTempalteProps) => {
  return (
    <Base>
      <Container>
        <Heading lineColor="secondary" lineLeft>
          Wishlist
        </Heading>
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
