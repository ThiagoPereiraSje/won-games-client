import Base from 'templates/Base'

import { Container } from 'components/Container'
import Divider from 'components/Divider'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

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
        {games?.length ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here!"
            hasLink
          />
        )}

        <Divider />
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
