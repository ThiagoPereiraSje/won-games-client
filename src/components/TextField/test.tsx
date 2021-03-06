import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MailOutline } from '@styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="Label" name="Field" />)

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    const { container } = renderWithTheme(<TextField />)

    expect(container.getElementsByTagName('label')).toHaveLength(0)
  })

  it('should be accessible by tab', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" />)

    const input = screen.getByLabelText(/textfield/i)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(input).toHaveFocus()
  })

  it('should not be accessible by tab when disable', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />)

    const input = screen.getByLabelText(/textfield/i)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(input).not.toHaveFocus()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="Hey You" />)

    expect(screen.getByPlaceholderText(/hey you/i)).toBeInTheDocument()
  })

  it('should change your value when user typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField onInput={onInput} label="TextField" name="TextField" />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'

    userEvent.type(input, text)

    // waitFor is needed because of useState
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should not change your value when the user types', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        name="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    const label = screen.getByText(/textfield/i)

    expect(input).toBeDisabled()

    userEvent.type(input, text)

    // waitFor is needed because of useState
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()

    expect(label).toHaveStyle({
      color: '#8F8F8F'
    })
  })

  it('should render with one icon on left by default', () => {
    renderWithTheme(<TextField icon={<MailOutline data-testid="icon" />} />)

    const input = screen.getByRole('textbox')
    const icon = screen.getByTestId('icon')

    expect(input).toHaveStyle({
      paddingLeft: '0.8rem'
    })

    expect(icon).toBeInTheDocument()
    expect(icon.parentElement).toHaveStyle({
      order: 0
    })
  })

  it('should render with one icon on right', () => {
    renderWithTheme(
      <TextField
        icon={<MailOutline data-testid="icon" />}
        iconPosition="right"
      />
    )

    const input = screen.getByRole('textbox')
    const icon = screen.getByTestId('icon')

    expect(input).toHaveStyle({
      paddingRight: '0.8rem'
    })

    expect(icon).toBeInTheDocument()
    expect(icon.parentElement).toHaveStyle({
      order: 1
    })
  })

  it('should render a red label, icon, border and message when it has error', () => {
    const { container } = renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
        icon={<MailOutline data-testid="icon" />}
        error="Oops.. something is wrong"
      />
    )

    const label = screen.getByText(/textfield/i)
    const icon = screen.getByTestId('icon')
    const input = screen.getByRole('textbox')
    const message = screen.getByText(/oops.. something is wrong/i)

    expect(label).toHaveStyle({
      color: '#FF6347'
    })

    expect(icon.parentElement).toHaveStyle({
      color: '#FF6347'
    })

    expect(input.parentElement).toHaveStyle({
      borderColor: '#FF6347'
    })

    expect(message).toBeInTheDocument()
    expect(message).toHaveStyle({
      color: '#FF6347'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
