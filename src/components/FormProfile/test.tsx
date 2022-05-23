import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    // heading
    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    // name textbox
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()

    // e-mail textbox
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    // password textbox
    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()

    // new password textbox
    expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument()

    // save button
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
