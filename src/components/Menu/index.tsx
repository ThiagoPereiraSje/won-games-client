import { Menu2 as MenuIcon } from 'styled-icons/remix-fill/index'
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon
} from 'styled-icons/material-outlined/index'

import Logo from 'components/Logo'

import * as S from './styles'

const Menu = () => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon />
        </S.IconWrapper>
      </S.MenuGroup>
    </S.Wrapper>
  )
}

export default Menu
