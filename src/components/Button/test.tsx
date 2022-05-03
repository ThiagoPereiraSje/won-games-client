import { render, screen } from '@testing-library/react'
import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<Button />)

    const element = screen.getByRole('heading', { name: /Button/i })

    expect(element).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Button />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
