import { createEffect, createEvent, createStore } from 'effector'
import { TProducts } from '../types/TProduct'

export const updateItems = createEvent<{ item: number }>()
export const updateVisibleItems = createEvent<{ item: number }>()
export const resetVisibleItems = createEvent()
export const fetchProductList = createEffect<string[], TProducts>()

export const $productList = createStore<TProducts>([])
export const $productListFilter = createStore<TProducts>([])
export const $visibleItems = createStore(0)
export const $items = createStore(4)

// $productList.watch((state) => {
//   console.log(state)
// })

// $visibleItems.watch((item) => {
//   console.log(item)
// })
