import 'match-media-mock'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Gallery from '.'

import mockGalleryImage from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockGalleryImage.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    ).toHaveAttribute('src', mockGalleryImage[0].src)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toHaveAttribute('src', mockGalleryImage[1].src)
  })

  it('should handle open modal when click on thumbnails', () => {
    renderWithTheme(<Gallery items={mockGalleryImage.slice(0, 2)} />)

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // verificar se o menu está escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // clicar na thumbnail para abrir o modal
    const thumb1 = screen.getByRole('button', {
      name: /thumb - gallery image 1/i
    })

    fireEvent.click(thumb1)

    // verificar se o modal abriu
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })
})
