import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { useStore } from 'effector-react'
import { $user } from '../../../app/model/app'
import { TProductProps } from '../types/TProductProps'
import { TProduct } from '../types/TProduct'

const Product: FC<PropsWithChildren<TProductProps & TProduct>> = ({
  title,
  thumbnail,
  description,
  price,
  rating,
  handleSubmit,
  handleIncrement,
  handleDecrement,
  handleOnchange,
  value,
}) => {
  const { userName } = useStore($user)

  return (
    <div
      className="content__col content__col--6 content__col--md-4 content__col--xl-6 content__col-product-card"
      data-filter="advice"
    >
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
              <div className="product__desc">
                <p>{description || 'description'}</p>
              </div>
              <strong className="product__price">
                {price} ₽/<sub>упак.</sub>
              </strong>
              <strong className="product__price">rating:{rating}</strong>
            </a>
            <div className="add-basket">
              {userName ? (
                <div className="add-basket">
                  <form className="add-basket__row" onSubmit={handleSubmit}>
                    <div className="field-num add-basket__num">
                      <span className="field-num__input-wrap">
                        <span className="field-num__input-and-btns">
                          <button
                            className="field-num__btn field-num__btn--minus"
                            type="button"
                            onClick={handleIncrement}
                          >
                            -
                          </button>
                          <button
                            className="field-num__btn field-num__btn--plus"
                            type="button"
                            onClick={handleDecrement}
                          >
                            +
                          </button>
                          <input
                            className="field-num__input"
                            type="number"
                            // defaultValue="0"
                            value={value}
                            name="quantity"
                            max="1000"
                            min="0"
                            step="1"
                            onChange={handleOnchange}
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
