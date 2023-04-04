import { FC, PropsWithChildren } from 'react'
import Footer from '../../../widgets/Footer'
import Header from '../../../widgets/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page__inner">
      <div className="page__content">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
