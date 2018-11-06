import React from 'react'
import { shallow } from 'enzyme'
import { ItemsFilters } from '../index'
import { visibilityFilters } from '../../../logic/visibilityFilter'

const defaultProps = {
  showAll: jest.fn(),
  showOnlyDoneItems: jest.fn(),
}

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsFilters {...defaultProps} />)
  })

  it('should render filters as buttons', () => {
    const renderedItem = shallow(<ItemsFilters {...defaultProps} />)
    expect(renderedItem.find('button')).toHaveLength(2)
  })

  it('should call showAll when ALL clicked', () => {
    const showAll = jest.fn()
    const renderedItem = shallow(
      <ItemsFilters {...defaultProps} showAll={showAll} />
    )
    renderedItem
      .find('button')
      .first()
      .simulate('click')
    expect(showAll.mock.calls.length).toBe(1)
  })

  it('should call showOnlyDoneItems when DONE clicked', () => {
    const showOnlyDoneItems = jest.fn()
    const renderedItem = shallow(
      <ItemsFilters {...defaultProps} showOnlyDoneItems={showOnlyDoneItems} />
    )
    renderedItem
      .find('button')
      .last()
      .simulate('click')
    expect(showOnlyDoneItems.mock.calls.length).toBe(1)
  })
})
