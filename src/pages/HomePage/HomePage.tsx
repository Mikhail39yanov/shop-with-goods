import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'

import FilterModel from '../../entities/Filter/model/FilterModel'
import { $productList } from '../../processes/model/product'
import { useStore } from 'effector-react'
import { $currentCatalog } from '../../processes/model/catalog'
import ProductModel from '../../entities/Product/model/ProductModel'

const HomePage: FC<PropsWithChildren> = () => {
  const [items, setItems] = useState(2)
  const [visItems, setVisItems] = useState(0)
  const refProductList = useRef<HTMLDivElement>(null)

  const productList = useStore($productList)
  const currentCatalog = useStore($currentCatalog)

  useEffect(() => {
    if (refProductList.current) {
      const array = refProductList.current?.children
      const visItems = [...array].slice(0, items)
      setVisItems(visItems.length)
      visItems.forEach((el) => el.classList.add('is-visible'))
    }
  }, [items, refProductList])

  return (
    <main>
      <div className="content">
        <div className="container">
          <header className="content__header content__header--c-main">
            <h2 className="title-h content__title">{currentCatalog}</h2>
          </header>
          <FilterModel />
          <div className="content__row content__row--xs-6 content__row--col-mb count-hide" ref={refProductList}>
            {productList.length === 0 && <h2>Список пуст</h2>}

            {productList.map((item, i) => (
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
          {productList.length !== visItems && (
            <button
              className="btn btn--lighten btn--s-big content__btn-more js-show-more"
              onClick={() => {
                setItems((prev) => prev + 2)
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
