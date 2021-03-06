import { useState } from 'react'
import { Close, FilterList } from '@styled-icons/material-outlined'
import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'
import * as S from './styles'

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
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleFilter = () => {
    onFilter(values)
  }

  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList
          size={18}
          aria-label="open filters"
          onClick={() => setIsOpen(true)}
        />
        <Close
          size={18}
          aria-label="close filters"
          onClick={() => setIsOpen(false)}
        />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
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
                    onCheck={(v) => handleChange(field.name, v)}
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
                    onChange={() => handleChange(item.name, field.name)}
                  />
                ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
