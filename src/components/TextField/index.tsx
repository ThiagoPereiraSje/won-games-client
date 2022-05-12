import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label = '',
  labelFor = '',
  initialValue = '',
  onInput,
  iconLeft,
  iconRight,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!iconLeft && <S.Icon>{iconLeft}</S.Icon>}
        <S.Input type="text" onChange={onChange} value={value} {...props} />
        {!!iconRight && <S.Icon>{iconRight}</S.Icon>}
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
