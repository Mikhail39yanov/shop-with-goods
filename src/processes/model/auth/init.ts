import { forward } from 'effector'

import { gSignIn, logout, manageGmailProviderFx, $user } from './'

manageGmailProviderFx.use(async () => {
  const { user } = await { user: { login: 'login' } }
  if (user === null) {
    throw 'no user found while gmail auth'
  }
  const login = user.login === null ? '' : user.login
  // const fullName = user.displayName === null ? '' : user.displayName
  const avatar = 'avatar'
  return { login, avatar }
})

$user.reset(logout).on(manageGmailProviderFx.doneData, (_, user) => user)

forward({
  from: gSignIn,
  to: manageGmailProviderFx,
})
