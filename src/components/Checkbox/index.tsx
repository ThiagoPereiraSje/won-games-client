import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxLabelColors = 'black' | 'white'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: CheckboxLabelColors
  onCheck?: (status: boolean) => void
  isChecked?: boolean
} & InputHTMLAttributes<HTMLInputElement> // union with input props

const Checkbox = ({
  label = '',
  labelFor = '',
  labelColor = 'white',
  onCheck,
  isChecked = false,
  ...props
}: CheckboxProps) => {
  // Controlled component (state)
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...props}
      />

      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
