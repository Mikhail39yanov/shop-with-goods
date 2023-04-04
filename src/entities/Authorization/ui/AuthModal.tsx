import { FC, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { TAuthModal } from '../types/TAuthModal'

const AuthModal: FC<PropsWithChildren<TAuthModal>> = ({
  handleSubmit = () => {},
  handleChangeLogin = () => {},
  handleChangePassword = () => {},
  closeModal = () => {},
  login = '',
  password = '',
}) => {
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div className="modal modal--width" id="modal-buy" tabIndex={-1} role="dialog">
      <div className="modal__dialog" role="document">
        <div className="modal__content">
          <div className="modal__header">
            <span className="close modal__close" data-fancybox-close="" aria-label="Закрыть" onClick={closeModal}>
              <span></span>
            </span>
            <h4 className="modal__title">Вход/Регистрация</h4>
          </div>
          <div className="modal__body">
            <form className="form" onSubmit={handleSubmit}>
              <div className="modal__group modal__group--mb-mini">
                <label className="field-text">
                  <span className="field-text__name">
                    login <span>*</span>
                  </span>
                  <span className="field-text__input-wrap">
                    <input
                      className="field-text__input"
                      type="text"
                      name="login"
                      required
                      onChange={handleChangeLogin}
                      value={login}
                    />
                  </span>
                </label>
              </div>
              <div className="modal__group modal__group--mb-middle">
                <label className="field-text">
                  <span className="field-text__name">
                    password <span>*</span>
                  </span>
                  <span className="field-text__input-wrap">
                    <input
                      className="field-text__input"
                      type="password"
                      name="password"
                      required
                      onChange={handleChangePassword}
                      value={password}
                    />
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn--s-middle btn--main">
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  )
}

export default AuthModal
