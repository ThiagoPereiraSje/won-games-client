import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import Radio from '.'

describe('<Radio />', () => {
  it('should render a input radio with label', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio label" labelFor="radio" />
    )

    const radio = screen.getByRole('radio')
    const label = screen.getByText(/radio label/i)

    // should render a input radio
    expect(radio).toBeInTheDocument()

    // should render a label
    expect(label).toBeInTheDocument()

    // label should have attribute for='radio'
    expect(label).toHaveAttribute('for', 'radio')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    const { container } = renderWithTheme(<Radio />)

    const radio = screen.getByRole('radio')

    // should render a input radio
    expect(radio).toBeInTheDocument()

    // should have not label elements
    expect(container.getElementsByTagName('label')).toHaveLength(0)
  })

  it('should render a label with white color by default', () => {
    renderWithTheme(<Radio label="Radio label" labelFor="radio" />)

    expect(screen.getByText(/radio label/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a label with black color', () => {
    renderWithTheme(
      <Radio label="Radio label" labelFor="radio" labelColor="black" />
    )

    expect(screen.getByText(/radio label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck event when state change to anyValue', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Radio
        label="Radio label"
        labelFor="radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    // interact with the element
    const radio = screen.getByRole('radio')
    userEvent.click(radio)

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(<Radio label="Radio label" labelFor="radio" />)

    expect(document.body).toHaveFocus()

    // interact with the element
    userEvent.tab()

    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
