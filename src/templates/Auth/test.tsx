import { render, screen } from '@testing-library/react'
import Auth from '.'

describe('<Auth />', () => {
  it('should render correctly', () => {
    render(<Auth />)

    const element = screen.getByRole('heading', { name: /Auth/i })

    expect(element).toBeInTheDocument()
  })
})
