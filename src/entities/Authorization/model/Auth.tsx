import { useStore } from 'effector-react'
import { ChangeEvent, FC, FormEvent, PropsWithChildren, useState } from 'react'
import { $regInForm, auth, updateRegForm } from '../../../processes/model/auth'
import { useNavigate } from 'react-router-dom'
import AuthModal from '../ui/AuthModal'

const Auth: FC<PropsWithChildren> = () => {
  const [valueLoginError, setLoginError] = useState('')
  const [valuePassError, setPassError] = useState('')

  const { login, password } = useStore($regInForm)

  const userStringify = JSON.stringify({ login, password })

  const navigate = useNavigate()
  const goMain = () => navigate('/')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    setLoginError(validateValueLogin())
    setPassError(validateValuePass())

    const isFormValid = !validateValueLogin() && !validateValuePass()

    if (!isFormValid) {
      return null
    }

    sessionStorage.setItem('token', userStringify)
    auth()
    goMain()
    updateRegForm({ value: '', key: 'login' })
    updateRegForm({ value: '', key: 'password' })
  }

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    updateRegForm({ value: event.target.value, key: 'login' })
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    updateRegForm({ value: event.target.value, key: 'password' })
  }

  const validateValueLogin = () => {
    if (login.length <= 1) {
      return 'Введите больше 2-x символов'
    }

    return ''
  }

  const validateValuePass = () => {
    if (password.length <= 1) {
      return 'Введите больше 2-x символов'
    }

    return ''
  }

  return (
    <AuthModal
      handleSubmit={handleSubmit}
      handleChangeLogin={handleChangeLogin}
      handleChangePassword={handleChangePassword}
      login={login}
      password={password}
      valueLoginError={valueLoginError}
      valuePassError={valuePassError}
    />
  )
}

export default Auth
