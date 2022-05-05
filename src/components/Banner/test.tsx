import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="/image"
        title="My title"
        subtitle="My subtitle"
        buttonLabel="My button"
        buttonLink="/link"
      />
    )

    const img = screen.getByRole('img')
    const title = screen.getByRole('heading', { name: /my title/i })
    const subtitle = screen.getByRole('heading', { name: /my subtitle/i })
    const buttonLink = screen.getByRole('link', { name: /my button/i })

    // verificar se imagem tem o atributo src
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/image')

    // verificar se o título foi renderizado
    expect(title).toBeInTheDocument()

    // verificar se o subtitulo foi renderizado
    expect(subtitle).toBeInTheDocument()

    // verificar se o link foi renderizado e tem href='link'
    expect(buttonLink).toBeInTheDocument()
    expect(buttonLink).toHaveAttribute('href', '/link')

    expect(container.firstChild).toMatchSnapshot()
  })
})
