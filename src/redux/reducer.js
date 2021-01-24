import { combineReducers } from 'redux'

const initialState = {
  count: 10,
}

const counterReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'COUNT_INCREMENT':
      return {
        count: state.count + 1
      }
    case 'COUNT_DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

export default combineReducers({
  counter: counterReducer,
})