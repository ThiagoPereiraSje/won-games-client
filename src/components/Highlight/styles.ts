import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'align'>

const wrapperModifiers = {
  align: {
    right: css`
      grid-template-areas: 'floatimage content';
      grid-template-columns: 1.3fr 2fr;
    `,

    left: css`
      grid-template-areas: 'content floatimage';
      /* grid-template-columns: 1.3fr 2fr; */
    `
  }
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, align }) => css`
    position: relative;
    height: 23rem;
    display: grid;

    ${!!align && wrapperModifiers.align[align]}

    /* grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr; */

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    text-align: right;
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
