import { TBaskets } from '../../../processes/model/basket/types'

export const sum = (basket: TBaskets) => {
  let sum = 0
  if (basket.length === 0) {
    return sum
  }

  return (sum = basket.reduce((prev, current) => (prev += Number(current.count) * Number(current.price)), 0))
}
