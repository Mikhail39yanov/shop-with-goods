import { $basket, updateBasket, resetBasket } from '.'

$basket.reset(resetBasket).on(updateBasket, (basket, product) => {
  for (let index = 0; index < basket.length; index++) {
    const element = basket[index]

    if (element?.id === product.id) {
      let n = Number(product.count)
      element.count = String(n)
      return [...basket].filter((item) => item.count !== '0')
    }
  }

  return [...basket, product]
})
