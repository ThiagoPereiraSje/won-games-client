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

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock BannerSlide"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // should have a Banner
    expect(screen.getByTestId(/mock bannerslide/i)).toBeInTheDocument()

    // should have 5 showcases
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
  })
})
