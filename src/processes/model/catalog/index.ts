import { createEffect, createStore } from 'effector'
import { TCatalogList } from './types'

export const fetchCatalogList = createEffect<void, TCatalogList>()

export const $catalogList = createStore<TCatalogList>([])

// $catalogList.watch((item) => {
//   console.log(item)
// })
