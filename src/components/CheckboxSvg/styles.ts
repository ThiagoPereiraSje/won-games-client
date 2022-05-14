import styled, { css } from 'styled-components'

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  /* altera o tamanho do elemento */
  width: 1.8em;
  height: 1.8em;
`

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0.8rem 0;

  ${Input}:focus + svg {
    outline: 3px solid #e55360;
    outline-offset: 2px;
  }

  ${Input}:focus:not(:focus-visible) + svg {
    outline: none;
  }

  svg {
    ${({ theme }) => css`
      width: 1.5em;
      height: 1.5em;
      margin-right: ${theme.spacings.xxsmall};

      * {
        transition: all 0.1s linear;
      }
    `}
  }

  ${Input}:checked + svg {
    ${({ theme }) => css`
      .checkbox__bg {
        fill: ${theme.colors.primary};
        stroke: ${theme.colors.black};
      }

      .checkbox__checkmark {
        stroke: ${theme.colors.white};
      }
    `}
  }
`
