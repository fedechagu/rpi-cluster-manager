/* eslint-env mocha */
import {expect} from 'chai'
import {List, Map} from 'immutable'

describe('Devices', () => {
  describe('List of devices', () => {
    function addDevice (currentState, device) {
      const devices = currentState.get('devices').push(device)
      return currentState.set('devices', devices)
    }

    it('Adds a device to the list', () => {
      const state = Map(
        {'devices': List.of('device 1', 'device 2')
      })
      const nextState = addDevice(state, 'device 3')

      expect(state).to.equal(Map({
        devices: List.of('device 1', 'device 2')
      }))

      expect(nextState).to.equal(Map({
        devices: List.of('device 1', 'device 2', 'device 3')
      }))
    })
  })
})
