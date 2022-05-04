import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    const menuIcon = screen.getByLabelText(/open menu/i)
    const searchIcon = screen.getByLabelText(/search/i)
    const shoppingCartIcon = screen.getByLabelText(/open shopping cart/i)
    const menuLogo = screen.getByRole('img', { name: /won games/i })

    expect(menuIcon).toBeInTheDocument()
    expect(searchIcon).toBeInTheDocument()
    expect(shoppingCartIcon).toBeInTheDocument()
    expect(menuLogo).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // selecionar o menu
    // para recuperar um elemento que está oculto na RTL passamos { hidden: true }
    const menuFull = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu está escondido
    expect(menuFull.getAttribute('aria-hidden')).toBe('true') // testa acessibilidade
    expect(menuFull).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu
    const menuIcon = screen.getByLabelText(/open menu/i)
    fireEvent.click(menuIcon)

    // verificar se o menu abriu
    expect(menuFull.getAttribute('aria-hidden')).toBe('false')
    expect(menuFull).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar menu
    const closeIcon = screen.getByLabelText(/close menu/i)
    fireEvent.click(closeIcon)

    // verificar se o menu fechou
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: 0 })
  })
})
