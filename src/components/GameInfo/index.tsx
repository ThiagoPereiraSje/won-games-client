import Heading from 'components/Heading'
import Button from 'components/Button'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading>{title}</Heading>
      <div>{description}</div>
      <div>{price}</div>
      <Button>Add to cart</Button>
      <Button>Wishlist</Button>
    </S.Wrapper>
  )
}

export default GameInfo
