import { Windows, Apple } from 'styled-icons/boxicons-logos'
import { Linux } from 'styled-icons/fa-brands'
import Heading from 'components/Heading'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

const GameDetails = () => {
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
          <S.Description>
            <Windows />
            <Linux />
            <Apple />
          </S.Description>
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
