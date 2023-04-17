import { sample } from 'effector'
import { $productList, $productListFilter } from '../product'
import { $filterListSettings, filterProducts, resetFilter, sortProducts, updateMax, updateMin } from '.'
import { TProducts } from '../product/types'
import { TFilterRangeProduct } from './types'

$filterListSettings
  .reset(resetFilter)
  .on(updateMin, (form, { key, value }) => ({
    ...form,
    [key]: value,
  }))
  .on(updateMax, (form, { key, value }) => ({
    ...form,
    [key]: value,
  }))

sample({
  source: $productListFilter,
  clock: [sortProducts],
  fn: (array, column) => {
    // console.log(array)

    let copyArr = [...array]

    copyArr = sortItems(copyArr, column) || []

    return copyArr
  },
  target: $productListFilter,
})

sample({
  source: [$productList, $filterListSettings],
  clock: [filterProducts],
  fn: (arrProduct, itemList) => {
    const filteredArray = arrProduct[0] as TProducts
    const filteredRange = arrProduct[1] as TFilterRangeProduct
    // console.log(arrProduct, itemList)

    const result = filteredArray.filter((item) => {
      if (item.price) {
        if (item.price >= filteredRange.min && item.price <= filteredRange.max) {
          return item
        }
      }
      return null
    })

    return result
  },
  target: $productListFilter,
})

function sortItems(arrayProduct: TProducts, column = 'default', dir = false) {
  if (column === 'rating') {
    return arrayProduct.sort((a, b) => {
      if (a.rating === undefined || b.rating === undefined) {
        return 0
      }

      if (dir === false ? a.rating > b.rating : a.rating < b.rating) return -1

      return 0
    })
  } else if (column === 'down') {
    return arrayProduct.sort((a, b) => {
      if (a.price === undefined || b.price === undefined) {
        return 0
      }

      if (dir === true ? a.price > b.price : a.price < b.price) return -1

      return 0
    })
  } else if (column === 'up') {
    return arrayProduct.sort((a, b) => {
      if (a.price === undefined || b.price === undefined) {
        return 0
      }

      if (dir === false ? a.price > b.price : a.price < b.price) return -1

      return 0
    })
  } else if (column === 'default') {
    return arrayProduct.sort((a, b) => {
      if (a.rating === undefined || b.rating === undefined) {
        return 0
      }

      if (dir === false ? a.rating > b.rating : a.rating < b.rating) return -1

      return 0
    })
  }
}
