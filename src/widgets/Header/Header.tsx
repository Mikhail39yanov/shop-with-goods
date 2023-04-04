import { FC, PropsWithChildren } from 'react'
import Login from '../../entities/User/model/Login'
import Catalog from '../../entities/Catalog'
import { Link } from 'react-router-dom'

const Header: FC<PropsWithChildren> = () => {
  return (
    <header className="page-header">
      <div className="page-header__top">
        <div className="container">
          <div className="page-header__row page-header__row--sb">
            <div className="page-header__logo">
              <div className="d-xl-none">
                <Link to={'/mobile'}>
                  <button className="burger page-header__menu js-menu" aria-label="Показать ничто">
                    <span>Показать ничто</span>
                  </button>
                </Link>
              </div>
              <h2 style={{ marginBottom: '0' }}>Header</h2>
            </div>
            <div className="page-header__info">
              <div className="d-xl-block">
                <div className="page-header__compare">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-header__bottom d-none d-xl-block page-header__bottom--line">
        <div className="container">
          <div className="page-header__rel">
            <div className="container__left">
              <div className="page-header__row page-header__row--sb">
                <nav className="navigation">
                  <button
                    className="burger navigation__burger-sub js-open-catalog"
                    aria-label="Показать каталог"
                    onMouseOver={() => {
                      const catalog = document.querySelector('.catalog')
                      catalog?.classList.add('active')
                    }}
                  >
                    <span>Показать каталог</span>
                  </button>
                  <ul className="navigation__list">
                    <li className="navigation__item">
                      <a className="navigation__link" href="catalog.html">
                        Каталог
                      </a>
                    </li>
                    <li className="navigation__item">
                      <a className="navigation__link" href="template-page.html">
                        О компании
                      </a>
                    </li>
                    <li className="navigation__item">
                      <a className="navigation__link" href="news.html">
                        Новости
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              className="catalog"
              onMouseLeave={() => {
                const catalog = document.querySelector('.catalog')
                catalog?.classList.remove('active')
              }}
            >
              <Catalog />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
