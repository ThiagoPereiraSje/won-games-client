import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Games from '.'

import mockExploreSidebarItems from 'components/ExploreSidebar/mock'
import mockGames from 'components/GameCardSlider/mock'

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock ExploreSidebar"></div>
    }
  }
})

jest.mock('components/GameCard', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock GameCard"></div>
    }
  }
})

describe('<Games />', () => {
  it('should render explore games page', () => {
    renderWithTheme(
      <Games
        filterItems={mockExploreSidebarItems}
        games={mockGames.slice(0, 3)}
      />
    )

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock GameCard')).toHaveLength(3)

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
