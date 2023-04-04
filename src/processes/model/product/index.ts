import { createEffect, createStore } from 'effector'
import { TProducts } from './types'

export const fetchProductList = createEffect<void, TProducts>()

export const $productList = createStore<TProducts>([])

// $productList.watch((item) => {
//   console.log(item)
// })
