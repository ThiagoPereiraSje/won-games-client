import { ShoppingCart } from '@styled-icons/material-outlined'

import { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => {
  return (
    <S.Wrapper>
      <ShoppingCart aria-label="shopping cart" size={20} />
      <span>{items.length}</span>
      <span>{total}</span>

      <div>
        {items.map((item) => (
          <div key={item.title}>{item.title}</div>
        ))}
      </div>
    </S.Wrapper>
  )
}

export default CartDropdown
