import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const SuccessfulPurchase: FC<PropsWithChildren> = () => {
  return (
    <div className="Success">
      <h1 style={{ textAlign: 'center' }}>Спасибо за покупку, ждите вечно😂</h1>
      <p style={{ textAlign: 'center' }}>
        <Link to={'/shop-with-goods'}>Вернуться на главную</Link>
      </p>
    </div>
  )
}

export default SuccessfulPurchase
