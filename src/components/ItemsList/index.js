import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleItem } from '../../logic/todos'
import { visibilityFilters } from '../../logic/visibilityFilter'
import './styles.css'

export const ItemsList = ({ items, toggleItem }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item => (
          <li key={item.id} onClick={() => toggleItem(item.id)} className={item.done ? 'done' : null}>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  )
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  toggleItem: PropTypes.func.isRequired,
}

export const getItems = ({ todos, visibilityFilter }) => {
  switch (visibilityFilter) {
    case visibilityFilters.SHOW_DONE:
      return todos.items.filter(item => item.done)
    default:
      return todos.items
  }
}

const mapStateToProps = state => ({
  items: getItems(state),
})

const mapDispatchToProps = dispatch => ({
  toggleItem: id => dispatch(toggleItem(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList)
