import { createEvent, createStore } from 'effector'
import { TCredentials } from './types'

export const auth = createEvent()
export const logout = createEvent()
export const updateRegForm = createEvent<{ value: string; fieldName: string }>()

export const $regInForm = createStore<TCredentials>({
  login: '',
  password: '',
})

// $regInForm.watch((item) => {
//   console.log(item)
// })
