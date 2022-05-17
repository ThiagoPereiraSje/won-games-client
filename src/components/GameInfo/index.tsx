import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>
      <Ribbon color="secondary">{`$${price}`}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button size="large" icon={<AddShoppingCart />}>
          Add to cart
        </Button>
        <Button size="large" icon={<FavoriteBorder />} minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
