import { createEvent, createStore } from 'effector'
import { TCredentials } from '../types/TCredentials'

export const auth = createEvent()
export const logout = createEvent()
export const updateRegForm = createEvent<{ value: string; key: string }>()

export const $regInForm = createStore<TCredentials>({
  login: '',
  password: '',
})

// $regInForm.watch((item) => {
//   console.log(item)
// })
