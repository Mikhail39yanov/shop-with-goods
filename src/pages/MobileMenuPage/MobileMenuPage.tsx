import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import CatalogMobile from '../../entities/CatalogMobile'

const MobileMenuPage: FC<PropsWithChildren> = () => {
  return (
    <div className="mb-menu__dialog">
      <header className="page-header">
        <div className="page-header__top">
          <div className="container">
            <div className="page-header__row page-header__row--sb">
              <div className="page-header__logo">
                <div className="d-xl-none">
                  <Link to={'/shop-with-goods'}>
                    <button
                      className="close page-header__menu"
                      aria-label="Закрыть меню"
                      data-fancybox-close=""
                      // onClick={goMain}
                    >
                      <span></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mb-menu__navigation">
        <div className="container">
          <nav className="navigation">
            <div className="mb-product">
              <h3
                className="mb-product__title js-collapse"
                onClick={() => {
                  const catalog = document.querySelector('.mb-product__wrap') as HTMLDivElement
                  const h3 = document.querySelector('.mb-product__title')
                  catalog.style.display = 'block'
                  h3?.classList.add('active')
                }}
              >
                Каталог
              </h3>
              <div className="mb-product__wrap">
                <CatalogMobile />
              </div>
            </div>
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link className="navigation__link" to={'/about'}>
                  О компании
                </Link>
              </li>

              <li className="navigation__item">
                <Link className="navigation__link" to={'/news'}>
                  Новости
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default MobileMenuPage
