import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Home, { HomeTemplateProps } from '.'
import banners from 'components/BannerSlider/mock'
import newGames from 'components/GameCardSlider/mock'
import highlistData from 'components/Highlight/mock'

const props: HomeTemplateProps = {
  banners,
  newGames,
  mostPopularHighlight: highlistData[0],
  mostPopularGames: newGames,
  upcommingGames: newGames,
  upcommingHighlight: highlistData[1],
  upcommingMoreGames: newGames,
  freeHighlight: highlistData[2],
  freeGames: newGames
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />)

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
  })
})
