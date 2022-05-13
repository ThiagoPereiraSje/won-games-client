import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    // should have name textfield
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()

    // should have email textfield
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    // should have password textfield
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

    // should have comfirm password textfield
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()

    // should have a button with label Sign up now
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()

    // should have the text: Already have an account
    expect(screen.getByText(/already have an account/i)).toBeInTheDocument()

    // should have a link with text Sign in
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
