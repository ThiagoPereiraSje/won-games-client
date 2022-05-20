import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import PaymentOptions from '.'

import mockCards from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and add new card button', () => {
    renderWithTheme(
      <PaymentOptions cards={mockCards} handlePayment={jest.fn} />
    )

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })
})
