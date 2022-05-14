import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type CheckboxSvgProps = {
  label: string
  labelFor: string
} & InputHTMLAttributes<HTMLInputElement>

const CheckboxSvg = ({
  label = '',
  labelFor = '',
  id = ''
}: CheckboxSvgProps) => {
  return (
    <S.Wrapper htmlFor={labelFor}>
      <input type="checkbox" id={id} />

      <svg
        role="img"
        aria-label="The checkmark"
        width="32"
        height="32"
        viewBox="-4 -4 39 39"
        aria-hidden="false"
        focusable="false"
      >
        <rect
          className="checkbox__bg"
          width="35"
          height="35"
          x="-2"
          y="-2"
          stroke="currentColor"
          fill="none"
          strokeWidth="3"
          rx="6"
          ry="6"
        ></rect>

        <polyline
          className="checkbox__checkmark"
          points="4,14 12,23 28,5"
          stroke="transparent"
          strokeWidth="4"
          fill="none"
        ></polyline>
      </svg>

      {!!label && <span>{label}</span>}
    </S.Wrapper>
  )
}

export default CheckboxSvg
