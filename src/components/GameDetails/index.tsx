import { Linux, Windows, Apple } from '@styled-icons/fa-brands'
import Heading from 'components/Heading'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

export type GamePlatform = 'windows' | 'linux' | 'mac'
export type GameRating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: GamePlatform[]
  rating: GameRating
  genres: string[]
}

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  rating,
  genres
}: GameDetailsProps) => {
  const platfrmIcons = {
    linux: <Linux title="Linux" size={18} />,
    windows: <Windows title="Windows" size={18} />,
    mac: <Apple title="Mac" size={18} />
  }

  const ratingOptions = {
    BR0: 'FREE',
    BR10: '10+',
    BR12: '12+',
    BR14: '14+',
    BR16: '16+',
    BR18: '18+'
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
          <S.Description>{developer}</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Release date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
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
          <S.Description>{ratingOptions[rating]}</S.Description>
        </S.Description>
        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
