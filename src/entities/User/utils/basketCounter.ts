import { TBaskets } from '../../../processes/model/basket/types'

export const basketCounter = (basket: TBaskets) => {
  let result = 0
  if (basket.length === 0) {
    return result
  }
  return (result = basket.reduce((prev, current) => (prev += Number(current.count)), 0))
}
