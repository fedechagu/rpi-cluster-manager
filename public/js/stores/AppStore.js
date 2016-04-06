import { createStore } from 'redux'
import { app } from '../reducers/RootReducer'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(app)

export default store
