import { render, screen } from '@testing-library/react'
import Home from '.'

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home />)

    const element = screen.getByRole('heading', { name: /Home/i })

    expect(element).toBeInTheDocument()
  })
})
