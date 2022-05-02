import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // 1º Renderizar o componente `render`
    render(<Logo />)

    // 2º Selecionar o componente a ser testado `screen` (queries)
    const element = screen.getByRole('heading', { name: /Logo/i })

    // 3º Interagir com o componente `event handler`

    // 4º Assert do compartamento esperado `expect`
    expect(element).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
