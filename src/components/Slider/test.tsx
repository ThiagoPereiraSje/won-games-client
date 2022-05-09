import 'match-media-mock'
import { render, screen } from '@testing-library/react'
import Slider, { SliderSettings } from '.'

const props: SliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false
}

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    const { container } = render(
      <Slider settings={props}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    const item1 = screen.getByText(/item 1/i)
    const item2 = screen.getByText(/item 2/i)

    expect(item1.parentElement?.parentElement).toHaveClass('slick-slide')
    expect(item2.parentElement?.parentElement).toHaveClass('slick-slide')
    expect(container.firstChild).toMatchSnapshot()
  })
})
