import { GameCardProps } from 'components/GameCard'
import GameCardSlider, { GameCardSliderColors } from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  gamesColor?: GameCardSliderColors
}

const Showcase = ({
  title,
  highlight,
  games,
  gamesColor = 'white'
}: ShowcaseProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      {!!highlight && <Highlight {...highlight} />}
      {!!games && games.length && (
        <GameCardSlider items={games} color={gamesColor} />
      )}
    </S.Wrapper>
  )
}

export default Showcase
