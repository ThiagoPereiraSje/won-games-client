import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'
import * as S from './styles'

type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="secondary" size="small">
            {item.title}
          </Heading>

          {item.type === 'checkbox'
            ? item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  labelFor={field.name}
                  label={field.label}
                />
              ))
            : item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  labelFor={field.name}
                  name={item.name}
                  label={field.label}
                  value={field.name}
                />
              ))}
        </div>
      ))}

      <Button fullWidth>Filter</Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
