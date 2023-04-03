import { FC, PropsWithChildren } from 'react'
import HomePage from '../pages/HomePage'
import Layout from '../shared/UI/Layout'
import { Route, Routes } from 'react-router-dom'
import Authorization from '../entities/Authorization/ui/Authorization'

const App: FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Authorization />} />
      </Routes>
    </Layout>
  )
}

export default App
