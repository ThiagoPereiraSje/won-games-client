import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

import mockGameItems from 'components/GameItem/mock'

export default function Orders(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={props.items} />
    </Profile>
  )
}

/*
  O profile vai mudar de acordo com usuário e
  por isso não faz sentido ser estático
*/
export async function getServerSideProps() {
  const props: OrdersListProps = {
    items: mockGameItems
  }

  return {
    props
  }
}
