import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Cart, { CartTemplateProps } from '.'

import mockCartItems from 'components/CartList/mock'
import mockPaymentOptions from 'components/PaymentOptions/mock'
import mockHighlights from 'components/Highlight/mock'
import mockGames from 'components/GameCardSlider/mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

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

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Empty"></div>
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

    // should have the template base
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()

    // should have a heading 'My Cart'
    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    // should have a cart list
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()

    // should have a payment options
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()

    // should have a divider
    expect(screen.getByRole('divider')).toBeInTheDocument()

    // should have a showcase
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()

    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    // should have the Empty component
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })

  // should render payment options without credit cards
  // should render cart page without highlight
  // should render cart page without games
})
