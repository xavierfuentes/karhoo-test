export const SET_VISIBILITY_FILTER = 'karhoo/assessment/SET_VISIBILITY_FILTER'

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DONE: 'SHOW_DONE',
}

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})

export const initialState = visibilityFilters.SHOW_ALL

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default reducer
