import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const Product: FC<PropsWithChildren> = () => {
  return (
    <div className="content__col content__col--6 content__col--md-4 content__col--xl-6" data-filter="advice">
      <article className="product">
        <span className="num-prod d-none">
          <b>0</b>
        </span>
        <div className="product__row">
          <a className="product__picture" data-label="img/content/product-1.png">
            <img src="img/content/product-1.png" alt="Show punto batİk design" />
          </a>
          <div className="product__content">
            <a className="product__wrap-link">
              <h3 className="product__title">Show punto batİk design</h3>
              <strong className="product__price">
                905 ₽/<sub>упак.</sub>
              </strong>
            </a>
            <div className="add-basket">
              <Link to={'/auth'} className="btn btn--main btn--r-middle">
                Выбрать
              </Link>
              {/* <a className="btn btn--main btn--r-middle" href="#modal-buy" data-fancybox="">
              </a> */}
              {/* <div className="add-basket">
                <form className="add-basket__row">
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
                          value="0"
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
              </div> */}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Product
