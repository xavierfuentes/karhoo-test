export const ADD_ITEM = 'karhoo/assessment/ADD_ITEM'

export const addItem = content => {
  return { type: ADD_ITEM, content }
}

export const initialState = {
  items: [
    { id: 1, content: 'Call mum' },
    { id: 2, content: 'Buy cat food' },
    { id: 3, content: 'Water the plants' },
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
          },
        ],
      }
    default:
      return state
  }
}

export default reducer
