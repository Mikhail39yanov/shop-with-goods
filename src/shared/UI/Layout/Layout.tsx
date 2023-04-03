import { FC, PropsWithChildren } from 'react'
import Header from '../../../widgets/Header'
import Footer from '../../../widgets/Footer'

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
