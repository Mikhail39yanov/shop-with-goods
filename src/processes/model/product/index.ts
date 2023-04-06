import { createEffect, createEvent, createStore } from 'effector'
import { TProducts } from './types'

export const updateCategory = createEvent<string>()
export const updateDecrement = createEvent()
export const updateIncrement = createEvent()

export const load = createEvent()

export const fetchProductList = createEffect<string[], TProducts>()
export const loadProductList = createEffect<string[], TProducts>()

export const $productList = createStore<TProducts>([])
export const $currentCatalog = createStore({})

// $productList.watch((item) => {
//   console.log(item)
// })

// $currentCatalog.watch((item) => {
//   console.log(item)
// })
