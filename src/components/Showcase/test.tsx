import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import highlightsMock from 'components/Highlight/mock'
import gameCardsMock from 'components/GameCardSlider/mock'
import Showcase from '.'

const props = {
  title: 'Most Popular',
  highlight: highlightsMock[0],
  games: [gameCardsMock[0]]
}

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightsMock[0].title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gameCardsMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without the title', () => {
    renderWithTheme(
      <Showcase highlight={highlightsMock[0]} games={[gameCardsMock[0]]} />
    )

    expect(
      screen.getByRole('heading', { name: highlightsMock[0].title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gameCardsMock[0].title })
    ).toBeInTheDocument()

    // should not have the title
    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without the highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={[gameCardsMock[0]]} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gameCardsMock[0].title })
    ).toBeInTheDocument()

    // should not have the highlight
    expect(
      screen.queryByRole('heading', { name: highlightsMock[0].title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={highlightsMock[0]} />
    )

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightsMock[0].title })
    ).toBeInTheDocument()

    // should not have the games
    expect(
      screen.queryByRole('heading', { name: gameCardsMock[0].title })
    ).not.toBeInTheDocument()
  })
})
