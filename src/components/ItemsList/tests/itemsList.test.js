import React from 'react'
import { shallow } from 'enzyme'
import { ItemsList, getItems } from '../index'
import { visibilityFilters } from '../../../logic/visibilityFilter'

const defaultProps = {
  items: [],
  toggleItem: jest.fn(),
}

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />)
  })

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />)
    expect(renderedItem.find('#items-missing')).toHaveLength(1)
  })

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }]
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />)
    expect(renderedItem.find('#items-missing')).toHaveLength(0)
  })

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }]
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />)
    expect(renderedItem.find('li')).toHaveLength(2)
  })

  it('should call toggleItem an item when clicked', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }]
    const toggleItem = jest.fn()
    const renderedItem = shallow(<ItemsList {...defaultProps} toggleItem={toggleItem} items={items} />)
    renderedItem
      .find('li')
      .first()
      .simulate('click')
    expect(toggleItem.mock.calls.length).toBe(1)
  })

  it('should filter only done = true items', () => {
    const state = {
      todos: { items: [{ id: 1, content: 'first', done: true }, { id: 2, content: 'second', done: false }] },
      visibilityFilter: visibilityFilters.SHOW_ALL,
    }
    const onlyDone = state.todos.items.filter(item => item.done)
    expect(getItems(state)).toEqual(state.todos.items)
    state.visibilityFilter = visibilityFilters.SHOW_DONE
    expect(getItems(state)).toEqual(onlyDone)
  })
})
