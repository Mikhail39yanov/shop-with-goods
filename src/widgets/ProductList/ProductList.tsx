import { useStore } from 'effector-react'
import { FC, PropsWithChildren } from 'react'

import { $productList } from '../../processes/model/product'
import Product from '../../entities/Product/ui/Product'

const ProductList: FC<PropsWithChildren> = () => {
  const productList = useStore($productList)

  return (
    <div className="content__row content__row--xs-6 content__row--col-mb count-hide">
      {productList.length === 0 && <h2>Список пуст</h2>}

      {productList.map((item) => (
        <Product key={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price} />
      ))}
    </div>
  )
}

export default ProductList
