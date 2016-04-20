import { combineReducers } from 'redux-immutable'
import { devices } from './DeviceReducer'

export const app = combineReducers({
  devices
})

export default app
