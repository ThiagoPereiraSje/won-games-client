import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameDetails from '.'

describe('<GameDetails />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameDetails />)

    expect(screen.getByText(/game details/i)).toBeInTheDocument()
  })
})
