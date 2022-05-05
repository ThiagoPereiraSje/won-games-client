import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    const title = screen.getByRole('heading', { name: /heading 1/i })
    const subtitle = screen.getByRole('heading', { name: /heading 2/i })
    const buttonLink = screen.getByRole('link', { name: /buy now/i })

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()

    expect(buttonLink).toBeInTheDocument()
    expect(buttonLink).toHaveAttribute('href', '/rdr2')
  })

  it('should render a background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
})
