import { createEffect, createStore } from 'effector'
import { TNewsList } from './types'

export const fetchNews = createEffect<unknown, TNewsList>()

export const $newsList = createStore<TNewsList>([])
