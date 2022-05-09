import { render, screen } from '@testing-library/react'
import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render the heading', () => {
    render(<GameCardSlider />)

    const element = screen.getByRole('heading', { name: /GameCardSlider/i })

    expect(element).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<GameCardSlider />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
