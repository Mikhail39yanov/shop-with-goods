import { forward, sample } from 'effector'
import { $productList, fetchProductList, updateCategory } from '.'
import { $catalogList, fetchCatalogList } from '../catalog'

fetchProductList.use(async (categories) => {
  if (categories.length === 0) {
    throw 'The directory list is empty'
  }

  const url = `https://dummyjson.com/products/category/${categories[0]}`
  const { products } = await fetch(url).then((response) => response.json())

  return products
})

$productList.on(fetchProductList.doneData, (_, product) => product)

sample({
  source: $catalogList,
  clock: [fetchCatalogList.doneData],
  fn: (categories) => categories,
  target: fetchProductList,
})

sample({
  source: $catalogList,
  clock: updateCategory,
  fn: (categories, item) => {
    return [item]
  },
  target: fetchProductList,
})

// forward({
//   from: updateCategory,
//   to: fetchProductList,
// })

// fetchProductList.done.watch(({ result }) => {
//   console.log($productList)
// })
