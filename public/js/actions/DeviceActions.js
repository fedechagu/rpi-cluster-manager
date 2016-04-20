export const ADD_DEVICE = 'ADD_DEVICE'
export const EDIT_DEVICE = 'EDIT_DEVICE'
export const DELETE_DEVICE = 'DELETE_DEVICE'

export function addDevice (device) {
  return { type: ADD_DEVICE, device }
}

export function editDevice (device) {
  return { type: EDIT_DEVICE, device }
}

export function deleteDevice (id) {
  return { type: DELETE_DEVICE, id }
}
