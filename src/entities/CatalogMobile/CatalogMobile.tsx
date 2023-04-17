import { useStore } from 'effector-react'
import { FC, PropsWithChildren } from 'react'
import { $catalogList, updateCategory } from '../../processes/model/catalog'
import { Link } from 'react-router-dom'

const CatalogMobile: FC<PropsWithChildren> = () => {
  const catalogList = useStore($catalogList)

  return (
    <>
      {catalogList.map((item) => (
        <h3
          key={item}
          style={{ width: '100%' }}
          className="mb-product__title js-collapse"
          onClick={() => {
            updateCategory(item)
          }}
        >
          <Link to={'/shop-with-goods'}>{item}</Link>
        </h3>
      ))}
    </>
  )
}

export default CatalogMobile
