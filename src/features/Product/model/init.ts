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
import { resetFilter } from '../../Filter/model'

fetchProductList.use(async (payload) => {
  if (payload.length === 0) {
    throw 'The directory list is empty'
  }

  // console.log(payload)
  // product
  // https://mocki.io/v1/64e78891-6e50-4219-ba85-f8311cb691b4
  // const url = `https://dummyjson.com/products/category/${payload[0]}`
  const url = `https://mocki.io/v1/64e78891-6e50-4219-ba85-f8311cb691b4`
  const { gadgets, perfumery, clothes } = await fetch(url).then((response) => response.json())
  if (payload[0] === 'gadgets') {
    return gadgets
  } else if (payload[0] === 'perfumery') {
    return perfumery
  } else {
    return clothes
  }
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
