import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none; // reset default layout

    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;
    position: relative;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
      left: 20%;
      top: 20%;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`

type LabelProps = Pick<RadioProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    cursor: pointer;
  `}
`
