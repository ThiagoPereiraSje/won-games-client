import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>By now</Button>)

    const element = screen.getByRole('button', { name: /by now/i })

    expect(element).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">By now</Button>)

    const element = screen.getByRole('button', { name: /by now/i })

    expect(element).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">By now</Button>)

    const element = screen.getByRole('button', { name: /by now/i })

    expect(element).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.0rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>By now</Button>)

    const element = screen.getByRole('button', { name: /by now/i })

    expect(element).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>By now</Button>
    )

    const element = screen.getByText(/by now/i)
    const icon = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    // Como fazer o debug de um componente (Imprimir o componente no console)
    // const { debug, container } = renderWithTheme(
    //   <Button as="a" href="/link">
    //     By now
    //   </Button>
    // )

    // debug(container)

    renderWithTheme(
      <Button as="a" href="/link">
        By now
      </Button>
    )

    const element = screen.getByRole('link', { name: /by now/i })

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('href', '/link')
  })

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        By now
      </Button>
    )

    const button = screen.getByRole('button', { name: /by now/i })

    expect(button).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(button).toHaveStyleRule('background', 'none', {
      modifier: ':hover'
    })
  })
})
