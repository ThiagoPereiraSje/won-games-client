import { gql } from '@apollo/client'

export const gameFragment = gql`
  fragment gameFragment on Game {
    name
    slug
    cover {
      url
    }
    developers {
      name
    }
    price
  }
`
