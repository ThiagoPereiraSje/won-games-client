import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Home, { HomeTemplateProps } from '.'
import banners from 'components/BannerSlider/mock'
import newGames from 'components/GameCardSlider/mock'
import highlistData from 'components/Highlight/mock'

const props: HomeTemplateProps = {
  banners,
  newGames: [newGames[0]],
  mostPopularHighlight: highlistData[0],
  mostPopularGames: [newGames[0]],
  upcomingGames: [newGames[0]],
  upcomingHighlight: highlistData[1],
  upcomingMoreGames: [newGames[0]],
  freeHighlight: highlistData[2],
  freeGames: [newGames[0]]
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // Menu
    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    // Footer
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()

    // Sections
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // Banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // Card game ( 5 sections com 4 cards cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // Highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(1)
  })
})
