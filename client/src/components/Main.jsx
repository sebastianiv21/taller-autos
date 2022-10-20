import { Routes, Route } from 'react-router-dom'
import { OrderProvider } from '../context/OrderContext'

//Components
import Navbar from './Navbar'

//Pages
import Login from '../pages/Login'
import Facturacion from '../pages/Facturacion'
import Ordenes from '../pages/Ordenes'
import NotFound from '../pages/NotFound'

const Main = () => {
  return (
    <>
      <OrderProvider>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='/facturacion'
            element={<Facturacion />}
          />
          <Route
            path='/ordenes'
            element={<Ordenes />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </OrderProvider>
    </>
  )
}

export default Main
