import { render, screen } from '@testing-library/react'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    render(<Menu />)

    const element = screen.getByRole('heading', { name: /Menu/i })

    expect(element).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Menu />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
