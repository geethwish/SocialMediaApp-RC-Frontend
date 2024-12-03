import { lazy, Suspense } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
const { Content } = Layout;

const HomePage = lazy(() => import('./pages/Home/Home'));
const NotFoundPage = lazy(() => import('./pages/404/NotFound'));

function App() {
  return (
    <Router>
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
