import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxLabelColors = 'black' | 'white'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: CheckboxLabelColors
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement> // union with input props

const Checkbox = ({
  label = '',
  labelFor = '',
  labelColor = 'white',
  onCheck
}: CheckboxProps) => {
  // Controlled component (state)
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
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
