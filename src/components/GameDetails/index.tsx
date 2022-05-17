import { Linux, Windows, Apple } from '@styled-icons/fa-brands'
import Heading from 'components/Heading'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

export type GamePlatform = 'windows' | 'linux' | 'mac'

export type GameDetailsProps = {
  platforms: GamePlatform[]
}

const GameDetails = ({ platforms = [] }: GameDetailsProps) => {
  const platfrmIcons = {
    linux: <Linux title="Linux" size={18} />,
    windows: <Windows title="Windows" size={18} />,
    mac: <Apple title="Mac" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Release date</S.Label>
          <S.Description>Nov 16, 2019</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((platform) => (
              <S.Icon key={platform}>{platfrmIcons[platform]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2k</S.Description>
        </S.Block>
        <S.Description>
          <S.Label>Rating</S.Label>
          <S.Description>18 +</S.Description>
        </S.Description>
        <S.Block>
          <S.Label>Genre</S.Label>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails