import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import ProfileMenu from '.'

import theme from 'styles/theme'

describe('<ProfileMenu />', () => {
  it('should render the profile menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveAttribute(
      'href',
      '/profile/cards'
    )

    expect(screen.getByRole('link', { name: /my orders/i })).toHaveAttribute(
      'href',
      '/profile/orders'
    )

    expect(screen.getByRole('link', { name: /sign out/i })).toHaveAttribute(
      'href',
      '/logout'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the profile menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
