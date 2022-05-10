import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

type Props = {
  heading?: string
}

const Home = ({ heading }: Props) => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Popular {heading}
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
