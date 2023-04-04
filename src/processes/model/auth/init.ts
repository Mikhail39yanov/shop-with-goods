import { forward } from 'effector'
import { auth, logout } from '.'
import { $user, manageProviderAuth } from '../app'

$user.reset(logout).on(manageProviderAuth.doneData, (_, user) => user)

forward({
  from: auth,
  to: manageProviderAuth,
})
