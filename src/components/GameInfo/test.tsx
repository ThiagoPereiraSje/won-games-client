import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameInfo from '.'

const props = {
  title: 'Game Title',
  description: 'Game Description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />)

    // must to have a title
    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument()

    // must to have a description
    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    // must to have a price
    expect(screen.getByText(/210.00/i)).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    // must to have a 'add to cart' button
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    // must to have a 'wishlist' button
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
