import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import Base from 'templates/Base'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'

import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
  games?: GameCardProps[]
}

const Games = ({ filterItems, games }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Games
