import { createEvent, createStore } from 'effector'
import { TFilterRangeProduct } from './types'

export const sortProducts = createEvent<string>()
export const filterProducts = createEvent()
export const updateMin = createEvent<{ value: number; key: string }>()
export const updateMax = createEvent<{ value: number; key: string }>()

export const $filterList = createStore<TFilterRangeProduct>({
  min: 0,
  max: 10000,
})

// $filterList.watch((item) => {
//   console.log(item)
// })
