import { TBaskets } from '../types/TBasket'

export const basketCounter = (basket: TBaskets) => {
  let result = 0
  if (basket.length === 0) {
    return result
  }
  return (result = basket.reduce((prev, current) => (prev += Number(current.count)), 0))
}
