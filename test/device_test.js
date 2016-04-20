/* eslint-env mocha */
import { expect } from 'chai'
import { List, Map } from 'immutable'
import store from '../public/js/stores/AppStore'
import { addDevice, editDevice, deleteDevice } from '../public/js/actions/DeviceActions'
import { Device } from '../public/js/entities/Devices'

describe('Devices', () => {
  describe('List of devices', () => {
    it('Gets the initial empty list', () => {
      const initialState = store.getState()
      expect(initialState).to.equal(Map({
        devices: List.of()
      }))
    })
    it('Adds a device to the list', () => {
      store.dispatch(
        addDevice(new Device({ ip: '127.0.0.1', name: 'test', id: 1 }))
      )

      expect(store.getState()).to.equal(Map({
        'devices': List.of(new Device({
          ip: '127.0.0.1', name: 'test', id: 1
        }))
      }))

      store.dispatch(
        addDevice(new Device({ ip: '127.0.0.2', name: 'test2', id: 2 }))
      )

      expect(store.getState()).to.equal(Map({
        'devices': List.of(
          new Device({
            ip: '127.0.0.1', name: 'test', id: 1
          }),
          new Device({
            ip: '127.0.0.2', name: 'test2', id: 2
          })
        )
      }))
    })
    it('Edits a device', () => {
      store.dispatch(
        editDevice(new Device({ ip: '127.0.0.2', name: 'test_edit', id: 1 }))
      )

      expect(store.getState()).to.equal(Map({
        'devices': List.of(
          new Device({
            ip: '127.0.0.2', name: 'test_edit', id: 1
          }),
          new Device({
            ip: '127.0.0.2', name: 'test2', id: 2
          })
        )
      }))
    })
    it('Deletes a device', () => {
      store.dispatch(
        deleteDevice(1)
      )

      expect(store.getState()).to.equal(Map({
        'devices': List.of(
          new Device({
            ip: '127.0.0.2', name: 'test2', id: 2
          })
        )
      }))
    })
  })
})
