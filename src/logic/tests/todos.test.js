import reducer, { initialState, addItem, toggleItem } from '../todos'

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

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [{ id: 1, content: 'first' }, { id: 2, content: 'second' }],
    }
    const mockAction = addItem('third')
    const result = reducer(state, mockAction)
    expect(result.items).toHaveLength(3)
    expect(result.items[2].id).toEqual(3)
    expect(result.items[2].content).toEqual('third')
  })

  it('should mark an item as done on TOGGLE_ITEM', () => {
    const state = {
      items: [{ id: 1, content: 'first', done: false }, { id: 2, content: 'second', done: false }],
    }
    const mockAction = toggleItem(1)
    const result = reducer(state, mockAction)
    expect(result.items).toHaveLength(2)
    expect(result.items[0].done).toEqual(true)
    expect(result.items[1].done).toEqual(false)
  })

  it('should not do anything on TOGGLE_ITEM if the wrong ID is passed', () => {
    const state = {
      items: [{ id: 1, content: 'first', done: false }, { id: 2, content: 'second', done: false }],
    }
    const mockAction = toggleItem(3)
    const result = reducer(state, mockAction)
    expect(result.items).toHaveLength(2)
    expect(result.items[0].done).toEqual(false)
    expect(result.items[1].done).toEqual(false)
  })
})
