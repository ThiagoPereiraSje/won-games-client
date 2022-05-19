import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
}

const Empty = ({ title, description }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Image
        role="image"
        src="/img/empty.svg"
        alt="A gamer in a couch playing videogame"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Empty
