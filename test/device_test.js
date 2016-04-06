/* eslint-env mocha */
import { expect } from 'chai'
import { List, Map } from 'immutable'
import store from '../public/js/stores/AppStore'
import { ADD_DEVICE, EDIT_DEVICE, DELETE_DEVICE } from '../public/js/actions/DeviceActions'

describe('Devices', () => {
  describe('List of devices', () => {
    it('Gets the initial empty list', () => {
      const initialState = store.getState()
      expect(initialState).to.equal(Map({devices: Map({})}))
    })
    it('Adds a device to the list', () => {
      const state = Map(
        {'devices': List.of('device 1', 'device 2')
      })

      store.dispatch({type: ADD_DEVICE, device: 'device 3'})

      expect(state).to.equal(Map({
        devices: List.of('device 1', 'device 2')
      }))

      expect(store.getState()).to.equal(Map({
        devices: List.of('device 1', 'device 2', 'device 3')
      }))
    })
  })
})
