import { GameCardProps } from 'components/GameCard'
import Heading, { HeadingProps } from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

export type ShowcaseProps = {
  heading?: HeadingProps
  highlight?: HighlightProps
  gameCards?: GameCardProps[]
}

const Showcase = ({ heading, highlight, gameCards }: ShowcaseProps) => {
  return (
    <S.Wrapper>
      {!!heading && <Heading {...heading} />}
      {!!highlight && <Highlight {...highlight} />}
      {!!gameCards && gameCards.length && <GameCardSlider items={gameCards} />}
    </S.Wrapper>
  )
}

export default Showcase
