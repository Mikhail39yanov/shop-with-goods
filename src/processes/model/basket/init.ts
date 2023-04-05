import { $basket, updateBasket } from '.'

$basket.on(updateBasket, (basket, product) => {
  if (product.count === '0') {
    return
  }

  for (let index = 0; index < basket.length; index++) {
    const element = basket[index]

    if (element?.id === product.id) {
      let n = Number(element.count) + Number(product.count)
      element.count = String(n)
      return [...basket]
    }
  }

  return [...basket, product]
})
