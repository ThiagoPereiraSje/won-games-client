import Base from 'templates/Base'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Button from 'components/Button'
// import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
  games: GameCardProps[]
}

const Games = ({ filterItems, games }: GamesTemplateProps) => {
  return (
    <Base>
      <ExploreSidebar items={filterItems} onFilter={() => ({})} />
      {games.map((game, index) => (
        <div key={index}>
          <GameCard {...game} />
        </div>
      ))}

      <Button>Show more</Button>
    </Base>
  )
}

export default Games
