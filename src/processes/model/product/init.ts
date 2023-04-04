import { $productList, fetchProductList } from '.'

fetchProductList.use(async () => {
  const url = `https://dummyjson.com/products/category/smartphones`
  const { products } = await fetch(url).then((response) => response.json())

  return products
})

$productList.on(fetchProductList.doneData, (_, product) => product)

fetchProductList()

// fetchProductList.done.watch(({ result }) => {
//   console.log($productList)
// })
