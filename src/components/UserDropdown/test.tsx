import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Thiago" />)

    expect(screen.getByText(/thiago/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username="Thiago" />)

    expect(
      screen.queryByRole('link', { name: /my profile/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('link', { name: /wishlist/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('link', { name: /sign out/i })
    ).not.toBeInTheDocument()

    // open menu
    userEvent.click(screen.getByText(/thiago/i))

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: /my profile/i })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('link', { name: /wishlist/i })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('link', { name: /sign out/i })
      ).toBeInTheDocument()
    })
  })
})
