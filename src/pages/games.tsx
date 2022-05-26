import GamesTempalte, { GamesTemplateProps } from 'templates/Games'

import mockExploreSidebarItems from 'components/ExploreSidebar/mock'
import mockGames from 'components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTempalte {...props} />
}

/*
 Como o conteúdo da página explore será modificado de acordo
 com a consulta realizada não faz sentido ser uma página estática
*/
export async function getServerSideProps() {
  const props: GamesTemplateProps = {
    filterItems: mockExploreSidebarItems,
    games: mockGames
  }

  return {
    props
  }
}
