import { forward } from 'effector'
import { $catalogList, $currentCatalog, fetchCatalogList, updateCategory } from '.'

fetchCatalogList.use(async () => {
  const url = `https://dummyjson.com/products/categories`
  const catalogs = await fetch(url).then((response) => response.json())

  return catalogs
})

$catalogList.on(fetchCatalogList.doneData, (_, catalog) => catalog)

$currentCatalog.on(fetchCatalogList.doneData, (_, catalog) => {
  // console.log()
  return catalog[0]
})

forward({
  from: updateCategory,
  to: $currentCatalog,
})

fetchCatalogList()
