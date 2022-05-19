import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Wishlist, { WishlistTempalteProps } from '.'

import mockHighlights from 'components/Highlight/mock'
import mockGames from 'components/GameCardSlider/mock'

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

const props: WishlistTempalteProps = {
  recommendedHighlight: mockHighlights[0],
  recommendedGames: mockGames.slice(0, 2)
}

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })
})
