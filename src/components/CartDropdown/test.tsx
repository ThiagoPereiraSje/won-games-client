import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CartDropdown from '.'

import mockCartItems from 'components/CartList/mock'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={mockCartItems} total="R$ 430,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${mockCartItems.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={mockCartItems} total="R$ 430,00" />)

    expect(screen.getByText('R$ 430,00')).toBeInTheDocument()
    expect(screen.getByText(`${mockCartItems[0].title}`)).toBeInTheDocument()
  })
})
