import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from '@styled-icons/material-outlined'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const settings: SliderSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  prevArrow: <ArrowLeft aria-label="previous image" />,
  nextArrow: <ArrowRight aria-label="next image" />,

  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 3.2,
        draggable: true
      }
    },

    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },

    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <img
            key={`thumb-${index}`}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
          />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Gallery
