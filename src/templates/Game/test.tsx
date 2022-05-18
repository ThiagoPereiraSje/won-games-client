import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Game, { GameTemplateProps } from '.'

import mockGameInfo from 'components/GameInfo/mock'
import mockGallery from 'components/Gallery/mock'
import mockGameDetails from 'components/GameDetails/mock'
import mockHighLight from 'components/Highlight/mock'
import mockGames from 'components/GameCardSlider/mock'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: mockGameInfo,
  gallery: mockGallery,
  description: '<h1>Custom HTML</h1>',
  details: mockGameDetails,
  upcomingHighlight: mockHighLight[2],
  upcomingGames: mockGames,
  recommendedGames: mockGames
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

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock GameInfo"></div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock GameDetails"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    // GameInfo
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    // Gallery
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    // GameDetails
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    // Showcase
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)

    expect(
      screen.getByRole('heading', { name: /custom html/i })
    ).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
