import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={mockCards} handlePayment={jest.fn} />
    )

    userEvent.click(screen.getByLabelText(/4325/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })
})
