import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Base from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    // should render menu component
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()

    // should render the children
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    // should render footer component
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
