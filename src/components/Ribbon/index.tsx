import { ReactNode } from 'react'
import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'

export type RibbonProps = {
  children: ReactNode
  color?: RibbonColors
}

const Ribbon = ({ children, color = 'primary' }: RibbonProps) => {
  return <S.Wrapper color={color}>{children}</S.Wrapper>
}

export default Ribbon
