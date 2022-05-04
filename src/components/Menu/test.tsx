import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    const menuIcon = screen.getByLabelText(/open menu/i)
    const searchIcon = screen.getByLabelText(/search/i)
    const shoppingCartIcon = screen.getByLabelText(/open shopping cart/i)
    const menuLogo = screen.getByLabelText(/won games/i)

    expect(menuIcon).toBeInTheDocument()
    expect(searchIcon).toBeInTheDocument()
    expect(shoppingCartIcon).toBeInTheDocument()
    expect(menuLogo).toBeInTheDocument()
  })
})
