import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // 1º Renderizar o componente `render`
    renderWithTheme(<Logo />)

    // 2º Selecionar o componente a ser testado `screen` (queries)
    const element = screen.getByLabelText(/won games/i).parentElement

    // 3º Interagir com o componente `event handler`

    // 4º Assert do compartamento esperado `expect`
    expect(element).toHaveStyle({ color: '#fafafa' })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    const element = screen.getByLabelText(/won games/i).parentElement

    expect(element).toHaveStyle({ color: '#030517' })
  })
})
