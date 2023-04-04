import { FC, PropsWithChildren } from 'react'
import Profile from '../../../shared/Icons/Profile'
import { Link } from 'react-router-dom'

const UserProfile: FC<PropsWithChildren> = () => {
  return (
    <div className="compare page-header__user">
      <div className="compare__row">
        <a className="compare__icon">
          <Profile />
        </a>
        <div className="compare__content">
          <strong>Профиль</strong>
        </div>
      </div>
      <div className="drop">
        <div className="drop__wrap">
          <div className="drop__item">
            <Link to={'/auth'}>Вход/Регистрация</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
