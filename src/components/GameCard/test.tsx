import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'population-zero.png',
  price: '251,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    const title = screen.getByRole('heading', { name: /population zero/i })
    const developer = screen.getByRole('heading', { name: /rockstar games/i })
    const price = screen.getByText(/251,00/i)
    const img = screen.getByRole('img', { name: /population zero/i })
    const favbutton = screen.getByRole('button', { name: /add to wishlist/i })
    const addToShoopingCartButton = screen.getByRole('button', {
      name: /add to shoppingcart/i
    })

    expect(title).toBeInTheDocument()
    expect(developer).toBeInTheDocument()
    expect(price).toBeInTheDocument()

    // assert img
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'population-zero.png')
    expect(img).toHaveAttribute('alt', 'Population Zero')

    // assert favbutton
    expect(favbutton).toBeInTheDocument()
    expect(favbutton.firstChild).not.toBe(null)

    // assert add to shopping cart button
    expect(addToShoopingCartButton).toBeInTheDocument()
    expect(addToShoopingCartButton.firstChild).not.toBe(null)
  })
})
