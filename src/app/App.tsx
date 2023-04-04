import { FC, PropsWithChildren } from 'react'
import HomePage from '../pages/HomePage'
import Layout from '../shared/UI/Layout'
import { Route, Routes } from 'react-router-dom'
import AuthorizationPage from '../pages/AuthorizationPage'
import MobileMenuPage from '../pages/MobileMenuPage'

const App: FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/mobile" element={<MobileMenuPage />} />
      </Routes>
    </Layout>
  )
}

export default App
