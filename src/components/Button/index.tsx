import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: ElementType
  minimal?: boolean
} & ButtonTypes

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
