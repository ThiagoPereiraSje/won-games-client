import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Sign in">
        <input type="text" />
      </Auth>
    )

    // logos
    expect(screen.getAllByLabelText(/won games/i)).toHaveLength(2)

    // title
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument()

    // subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and mos complete gaming platform/i
      })
    ).toBeInTheDocument()

    // Footer
    expect(
      screen.getByText(/Won Games 2020 © Todos os Direitos Reservados/i)
    ).toBeInTheDocument()

    // heading do content
    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
