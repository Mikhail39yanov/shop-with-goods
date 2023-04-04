import { useStore } from 'effector-react'
import { ChangeEvent, FC, FormEvent, PropsWithChildren } from 'react'
import { $regInForm, auth, updateRegForm } from '../../../processes/model/auth'
import { useNavigate } from 'react-router-dom'
import AuthModal from '../ui/AuthModal'

const Auth: FC<PropsWithChildren> = () => {
  const { login, password } = useStore($regInForm)

  const userStringify = JSON.stringify({ login, password })

  const navigate = useNavigate()
  const goMain = () => navigate('/')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    sessionStorage.setItem('token', userStringify)
    auth()
    goMain()
  }

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    updateRegForm({ value: event.target.value, fieldName: 'login' })
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    updateRegForm({ value: event.target.value, fieldName: 'password' })
  }

  const closeModal = () => {
    goMain()
  }
  return (
    <AuthModal
      handleSubmit={handleSubmit}
      handleChangeLogin={handleChangeLogin}
      handleChangePassword={handleChangePassword}
      closeModal={closeModal}
      login={login}
      password={password}
    />
  )
}

export default Auth
