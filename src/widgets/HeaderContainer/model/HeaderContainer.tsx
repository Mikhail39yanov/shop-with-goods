import { FC, PropsWithChildren } from 'react'
import Header from '../UI/Header'
import { logout } from '../../../processes/model/auth'
import { useStore } from 'effector-react'
import { $user } from '../../../processes/model/app'

const HeaderContainer: FC<PropsWithChildren> = () => {
  const { login, avatar } = useStore($user)

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    logout()
  }

  return <Header handleLogout={handleLogout} login={login} avatar={avatar} />
}

export default HeaderContainer
