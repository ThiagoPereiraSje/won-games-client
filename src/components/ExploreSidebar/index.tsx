import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'
import * as S from './styles'
import { useState } from 'react'

type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
}

const ExploreSidebar = ({ items, initialValues = {} }: ExploreSidebarProps) => {
  const [values] = useState(initialValues)

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
                  isChecked={!!values[field.name]}
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
                  defaultChecked={field.name === values[item.name]}
                />
              ))}
        </div>
      ))}

      <Button fullWidth>Filter</Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
