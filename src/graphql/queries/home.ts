import { bannerFragment } from 'graphql/fragments/banner'
import { gameFragment } from 'graphql/fragments/game'

import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query GetHome($release_date: Date!, $price: Float!, $limit: Int!) {
    banners {
      ...bannerFragment
    }

    newGames: games(
      where: { release_date_lte: $release_date }
      sort: "release_date:desc"
      limit: $limit
    ) {
      ...gameFragment
    }

    upcomingGames: games(
      where: { release_date_gt: $release_date }
      sort: "release_date:asc"
      limit: $limit
    ) {
      ...gameFragment
    }

    freeGames: games(
      where: { price_lte: $price }
      sort: "release_date:desc"
      limit: $limit
    ) {
      ...gameFragment
    }
  }

  ${bannerFragment}
  ${gameFragment}
`
