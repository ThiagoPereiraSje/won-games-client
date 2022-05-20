import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Cart, { CartTemplateProps } from '.'

import mockCartItems from 'components/CartList/mock'
import mockPaymentOptions from 'components/PaymentOptions/mock'
import mockHighlights from 'components/Highlight/mock'
import mockGames from 'components/GameCardSlider/mock'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock CartList"></div>
    }
  }
})

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock PaymentOptions"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

const props: CartTemplateProps = {
  items: mockCartItems,
  total: 'R$ 430,00'
}

describe('<Cart />', () => {
  it('should render the cart page', () => {
    renderWithTheme(
      <Cart
        {...props}
        cards={mockPaymentOptions}
        recommendedHighlight={mockHighlights[2]}
        recommendedGame={mockGames}
      />
    )

    // should have a menu
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    // should have a footer
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()

    // should have a heading 'My Cart'
    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    // should have a cart list
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()

    // should have a payment options
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()

    // should have a text 'your purchase is protected by a secure connection'
    expect(
      screen.getByText(/your purchase is protected by a secure connection/i)
    ).toBeInTheDocument()

    // should have a divider
    expect(screen.getByRole('divider')).toBeInTheDocument()

    // should have a showcase
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  // should render payment options without credit cards
  // should render cart page without highlight
  // should render cart page without games
  // should render cart page without games or highlight
})
