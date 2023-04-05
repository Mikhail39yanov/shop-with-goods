import { FC, PropsWithChildren } from 'react'
import Basket from '../../../shared/Icons/Basket'
import { useStore } from 'effector-react'
import { $basket } from '../../../processes/model/basket'

const UserBasket: FC<PropsWithChildren> = () => {
  const basket = useStore($basket)

  return (
    <div className="compare page-header__basket">
      <div className="compare__row">
        <a className="compare__icon">
          <Basket />
        </a>
        <div className="compare__content">
          <strong>Корзина</strong>
          <span className="compare__quan">{basket.length || 0}</span>
        </div>
      </div>
      <div className="drop drop--basket">
        <div className="drop__wrap">
          <div className="drop-basket">
            <header className="drop-basket__header drop-basket__header--sb">
              <a className="drop-basket__bas-link">Моя корзина</a>
            </header>
            <div className="baron drop-basket__scroll">
              <div className="baron__rel">
                <div className="baron__track">
                  <div className="baron__free">
                    <div className="baron__bar"></div>
                  </div>
                </div>
                <div className="baron__scroller">
                  {basket.length === 0 && <div className="drop-basket__item">Пусто</div>}
                  {basket.map((item) => (
                    <a key={item.id} className="drop-basket__item" href="catalog-single.html">
                      <div className="drop-basket__img">
                        <img src={item.thumbnail || 'img/content/product-1.png'} alt="Show punto batİk design" />
                      </div>
                      <div className="drop-basket__content">
                        <h3 className="drop-basket__title">{item.title || 'title'}</h3>
                        <span className="drop-basket__qual">{item.count || '10'} упак.</span>
                        <span className="drop-basket__price">{item.price || 0} ₽</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <footer className="drop-basket__header drop-basket__header--bg drop-basket__header--sb">
              <strong className="drop-basket__header-price">
                <span>Всего:</span> 0 ₽
              </strong>
              <a className="btn btn--main">Оформить заказ</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBasket
