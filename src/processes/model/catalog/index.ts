import { createEffect, createEvent, createStore } from 'effector'
import { TCatalogList } from './types'

export const updateCategory = createEvent<string>()

export const fetchCatalogList = createEffect<void, TCatalogList>()

export const $catalogList = createStore<TCatalogList>([])
export const $currentCatalog = createStore<string>('')

// $catalogList.watch((item) => {
//   console.log(item)
// })

// $currentCatalog.watch((item) => {
//   console.log(item)
// })
