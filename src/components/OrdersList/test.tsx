import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import OrdersList from '.'

import mockGameItems from 'components/GameItem/mock'

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock GameItem"></div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrdersList items={mockGameItems} />)

    // expect the heading 'My Orders'
    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    // expect three GameItems
    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(3)
  })

  it('should render the empty state', () => {
    renderWithTheme(<OrdersList />)

    // expect the Empty component
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
