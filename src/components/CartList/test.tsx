import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CartList from '.'

import mockCartList from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockCartList} total="R$ 430,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText(/total/i)).toBeInTheDocument()

    expect(screen.getByText('R$ 430,00')).toHaveStyle({
      color: '#f231a5'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(
      <CartList items={mockCartList} total="R$ 430,00" hasButton />
    )

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
