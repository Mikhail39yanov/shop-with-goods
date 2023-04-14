import { FC, PropsWithChildren } from 'react'

import ProductList from '../../widgets/ProductList'
import FilterModel from '../../entities/Filter/model/FilterModel'
import { $currentCatalog, $productList, load } from '../../processes/model/product'
import { useStore } from 'effector-react'
import { $catalogList } from '../../processes/model/catalog'

const HomePage: FC<PropsWithChildren> = () => {
  const productList = useStore($productList)
  const currentCatalog = useStore($currentCatalog)
  return (
    <main>
      <div className="content">
        <div className="container">
          <header className="content__header content__header--c-main">
            <h2 className="title-h content__title">{currentCatalog}</h2>
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
