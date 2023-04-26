import { useStore } from 'effector-react'
import { FC, PropsWithChildren } from 'react'
import { $catalogList, updateCategory } from './model'
import { resetVisibleItems } from '../../features/Product/model'
import { resetFilter, resetFilters } from '../../features/Filter/model'

const Catalog: FC<PropsWithChildren> = () => {
  const catalogList = useStore($catalogList)

  return (
    <div className="catalog__row">
      {catalogList.map((item) => (
        <div key={item} className="catalog__col">
          <div className="product-list">
            <h3
              className="product-list__title"
              onClick={() => {
                const catalog = document.querySelector('.catalog')
                catalog?.classList.remove('active')
                updateCategory(item)
                resetVisibleItems()
                resetFilter()
                resetFilters()
              }}
            >
              {item}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Catalog
