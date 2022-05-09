import { render, screen } from '@testing-library/react'
import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    render(<Slider />)

    const element = screen.getByRole('heading', { name: /Slider/i })

    expect(element).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Slider />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
