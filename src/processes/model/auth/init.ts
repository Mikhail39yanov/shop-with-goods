import { forward } from 'effector'
import { $regInForm, auth, logout, updateRegForm } from '.'
import { $user, manageProviderAuth } from '../app'

$user.reset(logout).on(manageProviderAuth.doneData, (_, user) => user)

forward({
  from: auth,
  to: manageProviderAuth,
})

$regInForm.on(updateRegForm, (form, { fieldName, value }) => ({
  ...form,
  [fieldName]: value,
}))
