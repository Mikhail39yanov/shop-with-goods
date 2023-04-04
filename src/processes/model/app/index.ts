import { createEffect, createStore } from 'effector'

import { User } from './types'

export const manageProviderAuth = createEffect<void, User>()

export const $user = createStore<User>({
  login: '',
})

// $user.watch((user) => {
//   console.log(user)
// })
