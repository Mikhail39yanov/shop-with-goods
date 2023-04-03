import { FC, FormEvent, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'

const Authorization: FC<PropsWithChildren> = () => {
  const navigate = useNavigate()
  const goMain = () => navigate('/')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    sessionStorage.setItem('token', 'true')
    goMain()
  }

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div className="modal modal--width" id="modal-buy" tabIndex={-1} role="dialog">
      <div className="modal__dialog" role="document">
        <div className="modal__content">
          <div className="modal__header">
            <span className="close modal__close" data-fancybox-close="" aria-label="Закрыть">
              <span></span>
            </span>
            <h4 className="modal__title">Авторизуйтесь</h4>
          </div>
          <div className="modal__body">
            <form className="form" onSubmit={handleSubmit}>
              <div className="modal__group modal__group--mb-mini">
                <label className="field-text">
                  <span className="field-text__name">
                    login <span>*</span>
                  </span>
                  <span className="field-text__input-wrap">
                    <input className="field-text__input" type="text" name="name" required />
                  </span>
                </label>
              </div>
              <div className="modal__group modal__group--mb-middle">
                <label className="field-text">
                  <span className="field-text__name">
                    password <span>*</span>
                  </span>
                  <span className="field-text__input-wrap">
                    <input className="field-text__input" type="text" name="password" required />
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn--s-middle btn--main">
                Оформить заказ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  )
}

export default Authorization
