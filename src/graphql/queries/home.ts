import { bannerFragment } from 'graphql/fragments/banner'

import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query GetHome {
    banners {
      ...bannerFragment
    }
  }

  ${bannerFragment}
`
