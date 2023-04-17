import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'

import FilterModel from '../../entities/Filter/model/FilterModel'
import {
  $items,
  $productListFilter,
  $visibleItems,
  updateItems,
  updateVisibleItems,
} from '../../processes/model/product'
import { useStore } from 'effector-react'
import { $currentCatalog } from '../../processes/model/catalog'
import ProductModel from '../../entities/Product/model/ProductModel'

const HomePage: FC<PropsWithChildren> = () => {
  const refProductList = useRef<HTMLDivElement>(null)

  const items = useStore($items)
  const visibleItems = useStore($visibleItems)
  const productListFilter = useStore($productListFilter)
  const currentCatalog = useStore($currentCatalog)

  useEffect(() => {
    if (refProductList.current) {
      const array = Array.from(refProductList.current?.children)
      const visItemsCurrent = array.slice(0, items)

      visItemsCurrent.forEach((el, i) => {
        return el.classList.add('is-visible')
      })

      updateVisibleItems({ item: visItemsCurrent.length })
    }
  }, [items, visibleItems, refProductList, productListFilter, currentCatalog])

  return (
    <main>
      <div className="content">
        <div className="container">
          <header className="content__header content__header--c-main">
            <h2 className="title-h content__title">{currentCatalog}</h2>
          </header>
          <FilterModel />
          {productListFilter.length === 0 && <h2>Список пуст</h2>}

          <div className="content__row content__row--xs-6 content__row--col-mb count-hide" ref={refProductList}>
            {productListFilter.map((item, i) => (
              <ProductModel
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          {productListFilter.length !== visibleItems && productListFilter.length >= 5 && (
            <button
              className="btn btn--lighten btn--s-big content__btn-more js-show-more"
              onClick={() => {
                updateItems({ item: 2 })
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
