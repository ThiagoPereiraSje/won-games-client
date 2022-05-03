import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    const element = screen.getByRole('heading')

    expect(element).toHaveStyle({ color: '#030517' })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)

    const element = screen.getByRole('heading')

    expect(element).toHaveStyle({ color: '#fafafa' })
  })

  it('should render a black heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    const element = screen.getByRole('heading')

    expect(element).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a black heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)

    const element = screen.getByRole('heading')

    expect(element).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
})