import { FC, PropsWithChildren } from 'react'
import HomePage from '../pages/HomePage'
import Layout from '../shared/UI/Layout'
import { Route, Routes } from 'react-router-dom'
import AuthorizationPage from '../pages/AuthorizationPage'
import MobileMenuPage from '../pages/MobileMenuPage'
import SuccessfulPurchase from '../widgets/SuccessfulPurchase'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import News from '../pages/News'
// https://mocki.io/v1/63bb0310-276a-499c-a162-9d42410d4df2
const App: FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/shop-with-goods" element={<HomePage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/mobile" element={<MobileMenuPage />} />
        <Route path="/buy" element={<SuccessfulPurchase />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
