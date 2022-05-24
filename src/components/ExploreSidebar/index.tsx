import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'
import * as S from './styles'

const ExploreSidebar = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="secondary" size="small">
        Price
      </Heading>
      <Checkbox name="under-50" labelFor="under-50" label="Under $50" />
      <Checkbox name="under-100" labelFor="under-100" label="Under $100" />
      <Checkbox name="under-150" labelFor="under-150" label="Under $150" />
      <Checkbox name="under-200" labelFor="under-200" label="Under $200" />
      <Checkbox name="free" labelFor="free" label="Free" />
      <Checkbox name="discounted" labelFor="discounted" label="Discounted" />

      <Heading lineBottom lineColor="secondary" size="small">
        Sort by
      </Heading>
      <Radio
        id="high-to-low"
        labelFor="high-to-low"
        name="sort-by"
        label="High to low"
        value="high-to-low"
      />

      <Radio
        id="low-to-high"
        labelFor="low-to-high"
        name="sort-by"
        label="Low to high"
        value="low-to-high"
      />

      <Heading lineBottom lineColor="secondary" size="small">
        System
      </Heading>
      <Checkbox name="windows" labelFor="windows" label="Windows" />
      <Checkbox name="mac" labelFor="mac" label="Mac" />
      <Checkbox name="linux" labelFor="linux" label="Linux" />

      <Heading lineBottom lineColor="secondary" size="small">
        Genre
      </Heading>
      <Checkbox name="action" labelFor="action" label="Action" />
      <Checkbox name="adventure" labelFor="adventure" label="Adventure" />
      <Checkbox name="fps" labelFor="fps" label="FPS" />
      <Checkbox name="mmorpg" labelFor="mmorpg" label="MMORPG" />

      <Button fullWidth>Filter</Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
