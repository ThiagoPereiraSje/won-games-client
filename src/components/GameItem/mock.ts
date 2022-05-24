import { GameItemProps } from '.'

const mockGameItems: GameItemProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
    downloadLink: '#',
    paymentInfo: {
      flag: 'mastercard',
      number: '**** **** **** 4326',
      img: '/img/master-card.png',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  },

  {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Borderlands 3',
    price: 'R$ 215,00',
    downloadLink: '#',
    paymentInfo: {
      flag: 'mastercard',
      number: '**** **** **** 4326',
      img: '/img/master-card.png',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  },

  {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Population zero',
    price: 'R$ 215,00',
    downloadLink: '#',
    paymentInfo: {
      flag: 'visa',
      number: '**** **** **** 4325',
      img: '/img/visa.png',
      purchaseDate: 'Purchase made on 08/20/2020 at 20:32'
    }
  }
]

export default mockGameItems
