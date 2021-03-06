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

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    const element = screen.getByText(/best seller/i)

    expect(element).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render with normal size as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    const element = screen.getByText(/best seller/i)

    expect(element).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

    const element = screen.getByText(/best seller/i)

    expect(element).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
