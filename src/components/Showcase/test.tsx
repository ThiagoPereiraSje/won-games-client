import 'match-media-mock'
import { screen } from '@testing-library/react'
import { HeadingProps } from 'components/Heading'
import { renderWithTheme } from 'utils/tests/helpers'
import highlihtsMock from 'components/Highlight/mock'
import gameCardsMock from 'components/GameCardSlider/mock'
import Showcase from '.'

const headingProps: HeadingProps = {
  children: 'Showcase heading'
}

describe('<Showcase />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Showcase heading={headingProps} />)

    expect(
      screen.getByRole('heading', { name: /showcase heading/i })
    ).toBeInTheDocument()
  })

  it('should render the highlight', () => {
    renderWithTheme(<Showcase highlight={highlihtsMock[0]} />)

    expect(
      screen.getByRole('heading', { name: /read dead is back/i })
    ).toBeInTheDocument()
  })

  it('should render one game card', () => {
    renderWithTheme(<Showcase gameCards={[gameCardsMock[0]]} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
  })
})
