import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  slug: 'population-zero',
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
    const favicon = screen.getByLabelText(/add to wishlist/i)
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

    // assert favicon
    expect(favicon).toBeInTheDocument()

    // assert add to shopping cart button
    expect(addToShoopingCartButton).toBeInTheDocument()
    expect(addToShoopingCartButton.firstChild).not.toBe(null)

    // assert slug link
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
  })

  it('should render the normal price by default', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(/251,00/i)

    // should have white color
    // should have background color secondary
    expect(price).toHaveStyle({
      color: '#FAFAFA',
      backgroundColor: '#3CD3C1'
    })

    // should not have text-decoration line-through
    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render the promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="200,00" />)

    const legacyPrice = screen.getByText(/251,00/i)
    const promotionalPrice = screen.getByText(/200,00/i)

    // should have gray color
    // should not have background color
    // should have text-decoration line-through
    expect(legacyPrice).toHaveStyle({
      color: '#8F8F8F',
      textDecoration: 'line-through',
      backgroundColor: 'unset'
    })

    // shoud have be rendered
    // should have white color
    // should have background color secondary
    expect(promotionalPrice).toBeInTheDocument()
    expect(promotionalPrice).toHaveStyle({
      color: '#FAFAFA',
      backgroundColor: '#3CD3C1'
    })

    // should not have text-decoration line-through
    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    const favicon = screen.getByLabelText(/remove from wishlist/i)

    expect(favicon).toBeInTheDocument()
  })

  it('should call onFav method when favorite icon is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    const favicon = screen.getAllByRole('button')[0]

    fireEvent.click(favicon)

    expect(onFav).toBeCalled()
  })

  it('should render a ribbon with small size by default', () => {
    renderWithTheme(<GameCard {...props} ribbon="20% OFF" />)

    const ribbon = screen.getByText(/20% off/i)

    // should have be rendered
    expect(ribbon).toBeInTheDocument()

    // should have background color primary by default
    // should have small size by default
    expect(ribbon).toHaveStyle({
      backgroundColor: '#F231A5',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
