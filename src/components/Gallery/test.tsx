import 'match-media-mock'
// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Gallery from '.'

import mockGalleryImage from './mock'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery items={[mockGalleryImage[0]]} />)
  })
})
