import Cart, { CartTemplateProps } from 'templates/Cart'

import mockCartItems from 'components/CartList/mock'
import mockPaymentOptions from 'components/PaymentOptions/mock'
import mockHighlights from 'components/Highlight/mock'
import mockGames from 'components/GameCardSlider/mock'

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}

/*
  A página do carrinho vai mudar de acordo com usuário e
  por isso não faz sentido ser uma página estática
*/
export async function getServerSideProps() {
  const props: CartTemplateProps = {
    items: mockCartItems,
    total: 'R$ 430,00',
    cards: mockPaymentOptions,
    recommendedHighlight: mockHighlights[2],
    recommendedGame: mockGames
  }

  return {
    props
  }
}
