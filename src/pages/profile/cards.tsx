import Profile from 'templates/Profile'
import CardsList, { CardsListProps } from 'components/CardsList'

import mockCards from 'components/PaymentOptions/mock'

export default function Cards(props: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={props.cards} />
    </Profile>
  )
}

/*
  A página do profile vai mudar de acordo com usuário e
  por isso não faz sentido ser uma página estática
*/
export async function getServerSideProps() {
  const props: CardsListProps = {
    cards: mockCards
  }

  return {
    props
  }
}
