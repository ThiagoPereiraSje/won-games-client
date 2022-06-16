import { gql } from '@apollo/client'

export const bannerFragment = gql`
  fragment bannerFragment on Banner {
    image {
      url
    }
    title
    subtitle
    button {
      label
      link
    }
    ribbon {
      text
      color
      size
    }
  }
`
