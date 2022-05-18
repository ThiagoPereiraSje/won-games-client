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

  it('should handle open/close modal', () => {
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

    // verificar se o modal foi aberto
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })

    // clicar no overlay/botão para fechar
    const closeButton = screen.getByRole('button', { name: /close modal/i })
    fireEvent.click(closeButton)

    // verificar se foi fechado
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC button is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockGalleryImage.slice(0, 2)} />
    )

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // abrir o nosso modal
    fireEvent.click(
      screen.getByRole('button', {
        name: /thumb - gallery image 1/i
      })
    )

    // usar a tecla ESC para fechar
    fireEvent.keyUp(container, { key: 'Escape' })

    // verificar se foi fechado
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  // testar a referencia dos slides

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockGalleryImage.slice(0, 2)} />)

    // clicar no thumbnail 2
    const thumb2 = screen.getByRole('button', {
      name: /thumb - gallery image 2/i
    })

    fireEvent.click(thumb2)

    // espero que a imagem 2 seja mostrada
    const img = await screen.findByRole('img', { name: /gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
