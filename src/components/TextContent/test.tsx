import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import TextContent from '.'

const props = {
  title: 'Description',
  content: 'Content text'
}

describe('<TextContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
  })
})
