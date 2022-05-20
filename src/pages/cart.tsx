import Cart, { CartTemplateProps } from 'templates/Cart'

import mockCartItems from 'components/CartList/mock'
import mockPaymentOptions from 'components/PaymentOptions/mock'
import mockHighlights from 'components/Highlight/mock'
import mockGames from 'components/GameCardSlider/mock'

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getStaticProps() {
  const props: CartTemplateProps = {
    cartList: {
      items: mockCartItems,
      total: 'R$ 430,00'
    },
    cards: mockPaymentOptions,
    highlight: mockHighlights[2],
    games: mockGames
  }

  return {
    props
  }
}
