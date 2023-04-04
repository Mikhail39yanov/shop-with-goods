import { FC, FormEvent, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { useStore } from 'effector-react'
import { $user } from '../../../processes/model/app'
import { TProduct } from '../../../processes/model/product/types'

type TProductProps = {
  login?: string
}

const Product: FC<PropsWithChildren<TProductProps & TProduct>> = ({ title, thumbnail }) => {
  const { login } = useStore($user)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <div className="content__col content__col--6 content__col--md-4 content__col--xl-6" data-filter="advice">
      <article className="product">
        <span className="num-prod d-none">
          <b>0</b>
        </span>
        <div className="product__row">
          <a className="product__picture" data-label="img/content/product-1.png">
            <img src={thumbnail || 'img/content/product-1.png'} alt="Show punto batİk design" />
          </a>
          <div className="product__content">
            <a className="product__wrap-link">
              <h3 className="product__title">{title || 'title'}</h3>
              <strong className="product__price">
                905 ₽/<sub>упак.</sub>
              </strong>
            </a>
            <div className="add-basket">
              {login ? (
                <div className="add-basket">
                  <form className="add-basket__row" onSubmit={handleSubmit}>
                    <div className="field-num add-basket__num">
                      <span className="field-num__input-wrap">
                        <span className="field-num__input-and-btns">
                          <button className="field-num__btn field-num__btn--minus" type="button">
                            -
                          </button>
                          <button className="field-num__btn field-num__btn--plus" type="button">
                            +
                          </button>
                          <input
                            className="field-num__input"
                            type="number"
                            defaultValue="0"
                            name="quantity"
                            max="1000"
                            min="0"
                            step="1"
                          />
                        </span>
                      </span>
                    </div>
                    <button className="btn btn--main btn--r-middle js-basket">В корзину</button>
                  </form>
                </div>
              ) : (
                <Link to={'/auth'} className="btn btn--main btn--r-middle">
                  Выбрать
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Product
