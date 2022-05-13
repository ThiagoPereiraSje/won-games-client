import Heading from 'components/Heading'
import Logo from 'components/Logo'
import { ReactNode } from 'react'
import * as S from './styles'

type AuthProps = {
  title: string
  children: ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Logo id="banner" />

          <div>
            <Heading>All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and mos complete gaming platform.
            </S.Subtitle>
          </div>

          <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>
      <S.Content>
        <S.ContentWrapper>
          <Logo id="content" color="black" size="large" />
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
