import CartList, { CartListProps } from 'components/CartList'
import Divider from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentCard } from 'components/PaymentOptions'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
// import * as S from './styles'

export type CartTemplateProps = {
  cartList: CartListProps
  cards?: PaymentCard[]
  highlight?: HighlightProps
  games?: GameCardProps[]
}

const Cart = ({ cartList, cards, highlight, games }: CartTemplateProps) => {
  return (
    <Base>
      <Heading lineLeft lineColor="secondary">
        My Cart
      </Heading>
      <CartList {...cartList} />
      <PaymentOptions cards={cards} handlePayment={() => ({})} />
      <p>
        Your purchase is protected by a secure connection from the WON platform.
        By purchasing from our store you agree and agree to our terms of use.
        After making the purchase you are entitled to a refund within a maximum
        of 30 days, without any additional cost, as long as the download of the
        purchased game has not occurred after your purchase.
      </p>

      <Divider role="divider" />

      <Showcase
        title="You may like these games"
        highlight={highlight}
        games={games}
      />
    </Base>
  )
}

export default Cart
