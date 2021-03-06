import { useEffect, useState, useRef } from 'react'
import SlickSlider from 'react-slick'
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close
} from '@styled-icons/material-outlined'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const commonSettings: SliderSettings = {
  dots: false,
  infinite: false,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  prevArrow: <ArrowLeft aria-label="previous image" />,
  nextArrow: <ArrowRight aria-label="next image" />
}

const settings: SliderSettings = {
  ...commonSettings,

  slidesToShow: 4,

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

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const slider = useRef<SlickSlider>(null)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            key={`thumb-${index}`}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
