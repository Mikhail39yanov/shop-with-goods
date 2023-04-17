import { sample } from 'effector'
import { $productList, fetchProductList } from '.'
import { $currentCatalog, fetchCatalogList, updateCategory } from '../catalog'

fetchProductList.use(async (payload) => {
  if (payload.length === 0) {
    throw 'The directory list is empty'
  }

  // console.log(payload)

  const url = `https://dummyjson.com/products/category/${payload[0]}`
  const { products } = await fetch(url).then((response) => response.json())

  return products
})

$productList.on(fetchProductList.doneData, (_, product) => {
  // console.log(product)
  return product
})

sample({
  source: $currentCatalog,
  clock: [fetchCatalogList.doneData, updateCategory],
  fn: (category) => {
    return [category]
  },
  target: fetchProductList,
})
