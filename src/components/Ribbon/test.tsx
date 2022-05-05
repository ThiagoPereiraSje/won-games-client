import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    const element = screen.getByText(/best seller/i)

    expect(element).toBeInTheDocument()
  })

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    const element = screen.getByText(/best seller/i)

    expect(element).toHaveStyle({ backgroundColor: '#F231A5' })
  })
})
