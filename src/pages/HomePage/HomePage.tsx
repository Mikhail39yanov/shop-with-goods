import { FC, PropsWithChildren } from 'react'
import Product from '../../entities/HomePage/ui/Product'
import Filter from '../../entities/Filter/ui/Filter'

const HomePage: FC<PropsWithChildren> = () => {
  return (
    <main>
      <div className="content">
        <div className="container">
          <header className="content__header content__header--c-main">
            <h2 className="title-h content__title">Пряжа</h2>
          </header>
          {/* <Filter /> */}
          <div className="content__row content__row--xs-6 content__row--col-mb count-hide">
            <Product />
          </div>
          <button className="btn btn--lighten btn--s-big content__btn-more js-show-more">Показать больше</button>
        </div>
      </div>
    </main>
  )
}

export default HomePage
