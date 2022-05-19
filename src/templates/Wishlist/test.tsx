import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Wishlist from '.'

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

const props = {
  recommendedHighlight: mockHighlights[0],
  recommendedGames: mockGames.slice(0, 2)
}

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} games={mockGames} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(7)
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
