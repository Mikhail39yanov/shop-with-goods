import { FC, PropsWithChildren } from 'react'
import { $user } from '../../../processes/model/app'
import { useStore } from 'effector-react'
import { logout } from '../../../processes/model/auth'
import UserProfile from '../ui/UserProfile'
import UserAuthorized from '../ui/UserAuthorized'

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
