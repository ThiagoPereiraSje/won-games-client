import Wishlist, { WishlistTempalteProps } from 'templates/Wishlist'

import mockGames from 'components/GameCardSlider/mock'
import mockHighlights from 'components/Highlight/mock'

export default function WishlistPage(props: WishlistTempalteProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const props: WishlistTempalteProps = {
    games: mockGames,
    recommendedGames: mockGames,
    recommendedHighlight: mockHighlights[2]
  }

  return {
    props
  }
}
