import { createEffect, createStore } from 'effector'

import { TUser } from './types'

export const manageProviderAuth = createEffect<void, TUser>()

export const $user = createStore<TUser>({
  userName: '',
})

// $user.watch((user) => {
//   console.log(user)
// })
