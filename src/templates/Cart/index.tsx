import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import Divider from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

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

        <S.Content>
          <CartList items={items} total={total} />
          <PaymentOptions cards={cards} handlePayment={() => ({})} />
        </S.Content>

        <p>
          Your purchase is protected by a secure connection from the WON
          platform. By purchasing from our store you agree and agree to our
          terms of use. After making the purchase you are entitled to a refund
          within a maximum of 30 days, without any additional cost, as long as
          the download of the purchased game has not occurred after your
          purchase.
        </p>

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
