import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from 'styled-icons/material-outlined'
import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

export type GameCardSliderColors = 'white' | 'black'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: GameCardSliderColors
}

const settings: SliderSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  prevArrow: <ArrowLeft aria-label="previous games" />,
  nextArrow: <ArrowRight aria-label="next games" />,

  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 4.2
      }
    },

    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },

    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },

    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },

    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default GameCardSlider
