import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter, visibilityFilters } from '../../logic/visibilityFilter'
import './styles.css'

export const ItemsFilters = ({ showAll, showOnlyDoneItems }) => {
  return (
    <div className="itemsFilters-div">
      <button onClick={showAll}>ALL</button>
      <button onClick={showOnlyDoneItems}>DONE</button>
    </div>
  )
}

ItemsFilters.propTypes = {
  showAll: PropTypes.func.isRequired,
  showOnlyDoneItems: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch(setVisibilityFilter(visibilityFilters.SHOW_ALL)),
  showOnlyDoneItems: () => dispatch(setVisibilityFilter(visibilityFilters.SHOW_DONE)),
})

export default connect(
  null,
  mapDispatchToProps
)(ItemsFilters)
