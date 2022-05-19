import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Wishlist from '.'

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist />)

    const element = screen.getByRole('heading', { name: /Wishlist/i })

    expect(element).toBeInTheDocument()
  })
})
