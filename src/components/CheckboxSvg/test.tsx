import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CheckboxSvg from '.'

describe('<CheckboxSvg />', () => {
  it('should render the checkbox', () => {
    renderWithTheme(
      <CheckboxSvg
        label="The checkbox label text"
        labelFor="c-checkbox"
        id="c-checkbox"
      />
    )

    const span = screen.getByText(/the checkbox label text/i)
    const checkbox = screen.getByRole('checkbox')

    // should have a text 'the checkbox label text'
    expect(screen.getByText(/the checkbox label text/i)).toBeInTheDocument()

    // should have a for attribute of 'c-checkbox'
    expect(span.parentElement).toHaveAttribute('for', 'c-checkbox')

    // should have a input type checkbox
    expect(checkbox).toBeInTheDocument()

    // the checkout should have id attribute of 'c-checkbox'
    expect(checkbox).toHaveAttribute('id', 'c-checkbox')

    // should have a image with aria-hidden=true
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument()
  })
})
