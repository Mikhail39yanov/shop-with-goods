import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC<PropsWithChildren> = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>404 — страница не найдена</h1>
      <p style={{ textAlign: 'center' }}>
        <Link to={'/shop-with-goods'}>Вернуться на главную</Link>
      </p>
    </>
  )
}

export default NotFound
