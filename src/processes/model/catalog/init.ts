import { forward, sample } from 'effector'
import { $catalogList, fetchCatalogList } from '.'
import { $productList, fetchProductList } from '../product'

fetchCatalogList.use(async () => {
  const url = `https://dummyjson.com/products/categories`
  const catalogs = await fetch(url).then((response) => response.json())

  return catalogs
})

$catalogList.on(fetchCatalogList.doneData, (_, catalog) => catalog)

fetchCatalogList()

// forward({
//   from: fetchCatalogList.doneData,
//   to: fetchProductList.doneData,
// })catalogList
