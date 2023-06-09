import { createEvent, createStore } from 'effector'
import { TBasket, TBaskets } from '../types/TBasket'

export const updateBasket = createEvent<TBasket>()
export const resetBasket = createEvent()

export const $basket = createStore<TBaskets>([])

// $basket.watch((item) => {
//   console.log(item)
// })
