import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    render(<Logo />)

    const element = screen.getByRole('heading', { name: /Logo/i })

    expect(element).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
