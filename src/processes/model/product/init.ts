import { forward, sample } from 'effector'
import { $currentCatalog, $productList, fetchProductList, load, loadProductList, updateCategory } from '.'
import { $catalogList, fetchCatalogList } from '../catalog'

fetchProductList.use(async (payload) => {
  if (payload.length === 0) {
    throw 'The directory list is empty'
  }

  const url = `https://dummyjson.com/products/category/${payload[0]}?skip=0&limit=2`
  const { products } = await fetch(url).then((response) => response.json())

  return products
})

loadProductList.use(async (payload) => {
  const url = `https://dummyjson.com/products/category/${payload}?skip=2&limit=4`
  const { products } = await fetch(url).then((response) => response.json())
  return products
})

$productList.on(fetchProductList.doneData, (_, product) => product)

$productList.on(loadProductList.doneData, (list, product) => {
  return [...list, ...product]
})

$currentCatalog.on(updateCategory, (_, cat) => {
  return cat
})

sample({
  source: $currentCatalog,
  clock: [load, fetchCatalogList.doneData],
  fn: (categories) => {
    if (typeof categories === 'object') {
      return ['smartphones']
    }
    return [categories.toString()]
  },
  target: loadProductList,
})

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
