import { forward } from 'effector'
import { $catalogList, $currentCatalog, fetchCatalogList, updateCategory } from '.'

fetchCatalogList.use(async () => {
  // catalogs
  // https://mocki.io/v1/9265db94-a84a-4caa-a71c-81397f461a5c
  // const url = `https://dummyjson.com/products/categories`
  const url = `https://mocki.io/v1/9265db94-a84a-4caa-a71c-81397f461a5c`
  const { catalogs } = await fetch(url).then((response) => response.json())
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
