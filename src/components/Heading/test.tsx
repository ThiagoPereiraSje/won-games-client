import { render, screen } from '@testing-library/react'
import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading />)

    const element = screen.getByRole('heading', { name: /Heading/i })

    expect(element).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Heading />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
