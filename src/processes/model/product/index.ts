import { createEffect, createEvent, createStore } from 'effector'
import { TProducts } from './types'

export const updateCategory = createEvent<string>()
export const updateDecrement = createEvent()
export const updateIncrement = createEvent()

export const load = createEvent()

export const fetchProductList = createEffect<string[], TProducts>()
export const loadProductList = createEffect<void, TProducts>()

export const $productList = createStore<TProducts>([])

$productList.watch((item) => {
  console.log(item)
})
