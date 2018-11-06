import { combineReducers } from 'redux'
import todos from '../logic/todos'
import visibilityFilter from '../logic/visibilityFilter'

export default function createReducer() {
  return combineReducers({
    todos,
    visibilityFilter
  })
}
