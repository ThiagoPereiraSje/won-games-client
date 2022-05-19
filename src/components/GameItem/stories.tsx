import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as ComponentMeta<typeof GameItem>

export const Basic: ComponentStory<typeof GameItem> = (args) => (
  <GameItem {...args} />
)

export const WithPayment: ComponentStory<typeof GameItem> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: '#',
  paymentInfo: {
    flag: 'mastercard',
    number: '**** **** **** 4326',
    img: '/img/master-card.png',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
