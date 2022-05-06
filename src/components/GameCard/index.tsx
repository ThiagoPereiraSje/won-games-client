import Button from 'components/Button'
import {
  FavoriteBorder,
  Favorite,
  AddShoppingCart
} from 'styled-icons/material-outlined'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false
}: GameCardProps) => {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton role="button">
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price isLegacy>{price}</S.Price>}

          <S.Price>{promotionalPrice || price}</S.Price>

          <Button
            size="small"
            icon={<AddShoppingCart />}
            aria-label="Add to ShoppingCart"
          />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
