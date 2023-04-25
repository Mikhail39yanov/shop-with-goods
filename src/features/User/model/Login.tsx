import { FC, PropsWithChildren } from 'react'
import { useStore } from 'effector-react'
import UserProfile from '../ui/UserProfile'
import UserAuthorized from '../ui/UserAuthorized'

import { $user } from '../../../app/model/app'
import { logout } from '../../Authorization/model/index'

const Login: FC<PropsWithChildren> = () => {
  const { userName, avatar } = useStore($user)

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    logout()
  }

  return (
    <>
      {userName ? <UserAuthorized handleLogout={handleLogout} userName={userName} avatar={avatar} /> : <UserProfile />}
    </>
  )
}

export default Login
