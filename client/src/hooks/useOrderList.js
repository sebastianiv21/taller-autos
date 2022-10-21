import { useContext } from 'react'
import OrderContext from '../context/OrderContext'

const useOrderList = () => {
  return useContext(OrderContext)
}

export default useOrderList
