import { sample } from 'effector'
import { $productList } from '../product'
import { sortProducts } from '.'
import { TProducts } from '../product/types'

sample({
  source: $productList,
  clock: [sortProducts],
  fn: (array, column) => {
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

    let copyArr = [...array]

    copyArr = sortItems(copyArr, column) || []

    return copyArr
  },
  target: $productList,
})
