import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Footer from '.'

describe('<Footer />', () => {
  it('should render four columns topics', () => {
    renderWithTheme(<Footer />)

    const contactColumn = screen.getByRole('heading', { name: /contact/i })
    const followUsColumn = screen.getByRole('heading', { name: /follow us/i })
    const linksColumn = screen.getByRole('heading', { name: /links/i })
    const locationColumn = screen.getByRole('heading', { name: /location/i })

    expect(contactColumn).toBeInTheDocument()
    expect(followUsColumn).toBeInTheDocument()
    expect(linksColumn).toBeInTheDocument()
    expect(locationColumn).toBeInTheDocument()
  })

  it('should have four columns on desktop size', () => {
    renderWithTheme(<Footer />)

    const element = screen.getByLabelText(/footer content/i)

    expect(element).toHaveStyleRule('grid-template-columns', 'repeat(4,1fr)', {
      media: '(min-width: 768px)'
    })
  })
})
