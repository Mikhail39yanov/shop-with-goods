import { createEvent, createStore } from 'effector'
import { TBasket, TBaskets } from './types'

export const updateBasket = createEvent<TBasket>()

export const $basket = createStore<TBaskets>([])

// $basket.watch((item) => {
//   console.log(item)
// })
