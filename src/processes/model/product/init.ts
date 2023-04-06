import { forward, sample } from 'effector'
import { $productList, fetchProductList, load, loadProductList, updateCategory } from '.'
import { $catalogList, fetchCatalogList } from '../catalog'

fetchProductList.use(async (payload) => {
  if (payload.length === 0) {
    throw 'The directory list is empty'
  }

  const url = `https://dummyjson.com/products/category/${payload[0]}?skip=0&limit=2`
  const { products } = await fetch(url).then((response) => response.json())

  return products
})

loadProductList.use(async () => {
  const url = `https://dummyjson.com/products/category/smartphones?skip=2&limit=4`
  const { products } = await fetch(url).then((response) => response.json())
  return products
})

$productList.on(fetchProductList.doneData, (_, product) => product)

$productList.on(loadProductList.doneData, (list, product) => {
  return [...list, ...product]
})

forward({
  from: load,
  to: loadProductList,
})

// sample({
//   source: $productList,
//   clock: load,
//   fn: (categories) => categories,
//   target: loadProductList,
// })

sample({
  source: $catalogList,
  clock: [fetchCatalogList.doneData],
  fn: (categories) => categories,
  target: fetchProductList,
})

sample({
  source: $catalogList,
  clock: updateCategory,
  fn: (_, item) => {
    return [item]
  },
  target: fetchProductList,
})
