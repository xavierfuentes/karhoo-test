import reducer, { initialState, setVisibilityFilter, visibilityFilters } from '../visibilityFilter'
import { getItems as selector } from '../../components/ItemsFilters'

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' }
    const mockAction = { type: 'mystery-meat' }
    const result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
  })

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' }
    const result = reducer(undefined, mockAction)
    expect(result).toEqual(initialState)
  })

  it('should change the visibility filter on SET_VISIBILITY_FILTER', () => {
    const state = 'test'
    const mockAction = setVisibilityFilter('eureka')
    const result = reducer(state, mockAction)
    expect(result).toEqual('eureka')
  })
})
