import { forward, sample } from 'effector'
import {
  $items,
  $productList,
  $productListFilter,
  $visibleItems,
  fetchProductList,
  resetVisibleItems,
  updateItems,
  updateVisibleItems,
} from '.'
import { $currentCatalog, fetchCatalogList, updateCategory } from '../../../entities/Catalog/model'
import { filterProducts, resetFilter } from '../../Filter/model'

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
  return product
})

$visibleItems.reset(resetVisibleItems).on(updateVisibleItems, (state, { item }) => {
  return item
})

$items.reset(resetVisibleItems).on(updateItems, (state, { item }) => {
  return state + item
})

sample({
  source: $currentCatalog,
  clock: [fetchCatalogList.doneData, updateCategory, resetFilter],
  fn: (category) => {
    return [category]
  },
  target: fetchProductList,
})

forward({
  from: $productList,
  to: $productListFilter,
})
