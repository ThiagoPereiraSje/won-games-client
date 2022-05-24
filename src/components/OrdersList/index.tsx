import Heading from 'components/Heading'
import GameItem, { GameItemProps } from 'components/GameItem'
import Empty from 'components/Empty'
import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items }: OrdersListProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom size="small" color="black">
        My orders
      </Heading>

      {!!items && items.length ? (
        items.map((item) => (
          <div key={item.title}>
            <GameItem {...item} />
          </div>
        ))
      ) : (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default OrdersList
