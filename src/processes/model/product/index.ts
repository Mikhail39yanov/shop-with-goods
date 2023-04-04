import { createEffect, createEvent, createStore } from 'effector'
import { TProducts } from './types'

export const updateCategory = createEvent<string>()

export const fetchProductList = createEffect<string[], TProducts>()

export const $productList = createStore<TProducts>([])

// $productList.watch((item) => {
//   console.log(item)
// })
