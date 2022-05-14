import styled, { css } from 'styled-components'

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  /* altera o tamanho do elemento */
  width: 1.5em;
  height: 1.5em;
  left: 19%;
  bottom: 50%;

  /*
    sometimes you may need to add z-index
    z-index: ...;
  */
`

export const Wrapper = styled.label`
  position: relative;

  ${Input}:focus + svg {
    outline: 3px solid #e55360;
    outline-offset: 2px;
  }

  ${Input}:focus:not(:focus-visible) + svg {
    outline: none;
  }

  svg {
    width: 1.5em;
    height: 1.5em;

    * {
      transition: all 0.1s linear;
    }
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
