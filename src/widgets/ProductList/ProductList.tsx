import { useStore } from 'effector-react'
import { FC, PropsWithChildren } from 'react'

import { $productList } from '../../processes/model/product'
import ProductModel from '../../entities/Product/model/ProductModel'

const ProductList: FC<PropsWithChildren> = () => {
  const productList = useStore($productList)

  return (
    <div className="content__row content__row--xs-6 content__row--col-mb count-hide">
      {productList.length === 0 && <h2>Список пуст</h2>}

      {productList.map((item) => (
        <ProductModel
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  )
}

export default ProductList
