import { FC, PropsWithChildren } from 'react'
import UserBasket from './UserBasket'
import { TUserAuthorized } from '../types/TUserAuthorized'

const UserAuthorized: FC<PropsWithChildren<TUserAuthorized>> = ({
  handleLogout = () => {},
  userName = undefined,
  avatar = undefined,
}) => {
  return (
    <div style={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gap: 10 }}>
      <a onClick={handleLogout}>Logout</a>
      <span style={{ fontWeight: 'bold' }}>{userName}</span>
      {avatar ? (
        <div
          style={{
            borderRadius: '50%',
            border: '1px solid black',
            width: '36px',
            height: '36px',
            overflow: 'hidden',
          }}
        >
          <img width="36" height="36" src={avatar} alt="profile pic" style={{ display: 'block' }} />
        </div>
      ) : null}
      <UserBasket />
    </div>
  )
}

export default UserAuthorized
