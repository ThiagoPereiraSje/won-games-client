import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider,
  args: {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
} as ComponentMeta<typeof Slider>

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

export const Vertical: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

Vertical.args = {
  settings: {
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    dots: true
  }
}
