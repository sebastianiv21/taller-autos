import { createContext, useState } from "react";
import orders from "../shared/ordersData";

const OrderContext = createContext({});

export const OrderProvider = ({children}) => {
    const [ordersList, setOrdersList] = useState(orders);

  return (
    <OrderContext.Provider
        value={{ordersList,setOrdersList}}
    >
        {children}
    </OrderContext.Provider>
  )
}

export default OrderContext