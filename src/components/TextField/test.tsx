import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MailOutline } from '@styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    const { container } = renderWithTheme(<TextField />)

    expect(container.getElementsByTagName('label')).toHaveLength(0)
  })

  it('should be accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText(/textfield/i)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(input).toHaveFocus()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="Hey You" />)

    expect(screen.getByPlaceholderText(/hey you/i)).toBeInTheDocument()
  })

  it('should change your value when user typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
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

  it('should render with one icon on left', () => {
    renderWithTheme(<TextField iconLeft={<MailOutline data-testid="icon" />} />)

    const input = screen.getByRole('textbox')
    const icon = screen.getByTestId('icon')

    expect(input).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render with one icon on right', () => {
    renderWithTheme(
      <TextField iconRight={<MailOutline data-testid="icon" />} />
    )

    const input = screen.getByRole('textbox')
    const icon = screen.getByTestId('icon')

    expect(input).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
