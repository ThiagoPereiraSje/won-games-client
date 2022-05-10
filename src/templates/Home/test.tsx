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
  upcommingGames: [newGames[0]],
  upcommingHighlight: highlistData[1],
  upcommingMoreGames: [newGames[0]],
  freeHighlight: highlistData[2],
  freeGames: [newGames[0]]
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // Menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // Footer
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    // Sections
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcomming/i })
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
