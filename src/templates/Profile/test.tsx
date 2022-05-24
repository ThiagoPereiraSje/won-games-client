import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Profile from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock ProfileMenu"></div>
    }
  }
})

describe('<Profile />', () => {
  it('should render the profile template', () => {
    renderWithTheme(
      <Profile>
        <h1>My child element</h1>
      </Profile>
    )

    // base template
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()

    // heading 'My Profile'
    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    // ProfileMenu
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()

    // a child element
    expect(
      screen.getByRole('heading', { name: /my child element/i })
    ).toBeInTheDocument()
  })
})
