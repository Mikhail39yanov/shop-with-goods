import { FC, PropsWithChildren } from 'react'
import Footer from '../../../widgets/Footer'
import HeaderContainer from '../../../widgets/HeaderContainer'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page__inner">
      <div className="page__content">
        <HeaderContainer />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
