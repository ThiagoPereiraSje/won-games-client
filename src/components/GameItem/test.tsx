import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameItem from '.'

const props = {
  img: 'img.png',
  title: 'A simple game title',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('img', { name: /a simple game title/i })
    ).toHaveAttribute('src', 'img.png')

    // title
    expect(
      screen.getByRole('heading', { name: /a simple game title/i })
    ).toBeInTheDocument()

    // price
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })
})
