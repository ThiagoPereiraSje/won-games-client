import 'match-media-mock'
import { screen } from '@testing-library/react'
import { BannerProps } from 'components/Banner'
import BannerSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const items: BannerProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render a vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    // should have class slick-vertical
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with one active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    // should have 3 slides
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)

    // should have 1 active
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    // should have the title of firt banner visible
    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    // second banner can't be visible
    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the dots of each slide', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    const dots = container.querySelector('ul.slick-dots')

    expect(dots).toBeInTheDocument()
    expect(dots?.children.length).toBe(3)
  })
})
