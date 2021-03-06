import Link from 'next/link'

import { ReactNode } from 'react'

import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import formatPrice from 'utils/formatPrice'

import * as S from './styles'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  onFav?: () => void
  ribbon?: ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: GameCardProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}

      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>
      </Link>

      <S.Content>
        <Link href={`game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>

        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isLegacy>{price ? formatPrice(price) : 'FREE'}</S.Price>
          )}

          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>

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
