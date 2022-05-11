import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.div``

type LabelProps = Pick<RadioProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
