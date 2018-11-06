export const ADD_ITEM = 'karhoo/assessment/ADD_ITEM'
export const TOGGLE_ITEM = 'karhoo/assessment/TOGGLE_ITEM'

export const addItem = content => {
  return { type: ADD_ITEM, content }
}

export const toggleItem = id => ({
  type: TOGGLE_ITEM,
  id,
})

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', done: false },
    { id: 2, content: 'Buy cat food', done: false },
    { id: 3, content: 'Water the plants', done: false },
  ],
}

const nextId = items => items.reduce((id, item) => Math.max(item.id, id), 0) + 1

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: nextId(state.items),
            content: action.content,
            done: false,
          },
        ],
      }
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map(item => (item.id === action.id ? { ...item, done: !item.done } : item)),
      }
    default:
      return state
  }
}

export default reducer
