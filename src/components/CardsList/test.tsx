import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CardsList from '.'

import mockCards from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={mockCards} />)

    // heading 'My cards'
    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    // img 'visa'
    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    // card number
    expect(screen.getByText(/4325/)).toBeInTheDocument()

    // img 'mastercard'
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )

    // card number
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
