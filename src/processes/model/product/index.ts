import { createEffect, createStore } from 'effector'
import { TProducts } from './types'

export const fetchProductList = createEffect<string[], TProducts>()

export const $productList = createStore<TProducts>([])
export const $productListFilter = createStore<TProducts>([])

// $productList.watch((item) => {
//   console.log(item)
// })
