import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    // input a partir da role
    const checkbox = screen.getByRole('checkbox')

    // input a partir da label associada
    // const checkbox = scree.getByLabelText(/checkbox label/i)

    // label a partir do texto dela
    const label = screen.getByText(/checkbox label/i)

    expect(checkbox).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    const { container } = renderWithTheme(<Checkbox />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(container.getElementsByTagName('label')).toHaveLength(0)
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" onCheck={onCheck} />
    )

    const checkbox = screen.getByRole('checkbox')

    expect(onCheck).not.toHaveBeenCalled()

    // interact with the element
    userEvent.click(checkbox)

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  })
})
