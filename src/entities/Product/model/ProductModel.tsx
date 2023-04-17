import { ChangeEvent, FC, FormEvent, PropsWithChildren, useState } from 'react'
import Product from '../ui/Product'
import { TProduct } from '../../../processes/model/product/types'
import { updateBasket } from '../../../processes/model/basket'

const ProductModel: FC<PropsWithChildren<TProduct>> = ({ id, title, description, thumbnail, price, rating }) => {
  const [value, setValue] = useState('0')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    updateBasket({ id, title, count: value, thumbnail, price })
  }

  const handleDecrement = () => {
    setValue((prev) => {
      const str = Number(prev) + 1
      return String(str)
    })
  }
  const handleIncrement = () => {
    setValue((prev) => {
      if (prev === '0') {
        return prev
      }
      const str = Number(prev) - 1
      return String(str)
    })
  }

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Product
      key={id}
      id={id}
      title={title}
      description={description}
      thumbnail={thumbnail}
      price={price}
      rating={rating}
      handleOnchange={handleOnchange}
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
      handleSubmit={handleSubmit}
      value={value}
    />
  )
}

export default ProductModel
