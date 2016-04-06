import { combineReducers } from 'redux-immutable'
import { Map, List } from 'immutable'
import { ADD_DEVICE, EDIT_DEVICE, DELETE_DEVICE } from '../actions/DeviceActions'

const initialState = Map({})

function devices (state = initialState, action) {
  switch (action.type) {
    case ADD_DEVICE:
      return state.push(action.device)
    case EDIT_DEVICE:
      return state
    case DELETE_DEVICE:
      return state
    default:
      return state
  }
}

export const app = combineReducers({
  devices
})

export default app
