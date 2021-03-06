import Base from 'templates/Base'

import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import Divider from 'components/Divider'
import Empty from 'components/Empty'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type CartTemplateProps = {
  recommendedHighlight?: HighlightProps
  recommendedGame?: GameCardProps[]
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  items,
  total,
  cards,
  recommendedHighlight,
  recommendedGame
}: CartTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        {!!items && items.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={() => ({})} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers!"
            hasLink
          />
        )}

        <Divider role="divider" />
      </Container>

      <Showcase
        title="You may like these games"
        highlight={recommendedHighlight}
        games={recommendedGame}
      />
    </Base>
  )
}

export default Cart
