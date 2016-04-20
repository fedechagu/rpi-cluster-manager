import { List } from 'immutable'
import { ADD_DEVICE, EDIT_DEVICE, DELETE_DEVICE } from '../actions/DeviceActions'

function deviceById (device) {
  return this.id === device.id
}

export function devices (state = List.of(), action) {
  switch (action.type) {
    case ADD_DEVICE:
      return state.push(action.device)
    case EDIT_DEVICE:
      return state.set(state.findIndex(deviceById, action.device), action.device)
    case DELETE_DEVICE:
      return state.delete(state.findIndex(deviceById, action))
    default:
      return state
  }
}
