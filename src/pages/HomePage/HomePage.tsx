import { FC, PropsWithChildren } from 'react'

import ProductList from '../../widgets/ProductList'
import FilterModel from '../../entities/Filter/model/FilterModel'
import { $productList, load } from '../../processes/model/product'
import { useStore } from 'effector-react'

const HomePage: FC<PropsWithChildren> = () => {
  const productList = useStore($productList)
  return (
    <main>
      <div className="content">
        <div className="container">
          <header className="content__header content__header--c-main">
            <h2 className="title-h content__title">Пряжа</h2>
          </header>
          <FilterModel />
          <ProductList />
          {productList.length >= 5 ? (
            <></>
          ) : (
            <button
              className="btn btn--lighten btn--s-big content__btn-more js-show-more"
              onClick={() => {
                load()
              }}
            >
              Показать больше
            </button>
          )}
        </div>
      </div>
    </main>
  )
}

export default HomePage
