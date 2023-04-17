import { FC, PropsWithChildren } from 'react'

const Footer: FC<PropsWithChildren> = () => {
  return (
    <div className="page__footer-wrapper">
      <footer className="page-footer">
        <div className="container">
          <div className="page-footer__content">
            <div className="page-footer__row page-footer__row--xl-reverse">
              <div className="page-footer__col page-footer__col--xl-8">
                <section className="page-footer__commun">
                  <h3 className="page-footer__title-info">Контакты</h3>
                  <div className="page-footer__commun-row">
                    <div className="page-footer__info">
                      <div className="phone page-footer__phone">
                        <a
                          className="phone__wrap phone__wrap--pd phone__wrap--arrow phone__wrap--white"
                          href="tel:+7(347)246–22–58"
                        >
                          <span className="phone__number">+7 (347) 246–22–58</span>
                          <span className="phone__text">Звоните с 8:00 до 18:00</span>
                        </a>
                        <div className="phone__list">
                          <a className="phone__wrap" href="tel:+7(347)246–22–58">
                            <span className="phone__number">+7 (347) 246–22–58</span>
                            <span className="phone__text">Примечание</span>
                          </a>
                          <a className="phone__wrap" href="tel:+7(347)246–22–58">
                            <span className="phone__number">+7 (347) 246–22–58</span>
                            <span className="phone__text">Примечание</span>
                          </a>
                        </div>
                      </div>
                      <a className="page-footer__link" href="mailto:baimur@yandex.ru">
                        kld@yandex.ru
                      </a>
                    </div>
                    <div className="page-footer__address">
                      <p>Пн - Вс: 9:00 - 18:00 — г.Калининград</p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="page-footer__col page-footer__col--xl-4">
                <div className="page-footer__copyright">
                  <div className="copyright">
                    <p>2023 © «SHOP»</p>
                    <p>Интернет магазин</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
