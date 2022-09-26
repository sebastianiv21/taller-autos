import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import orders from "../shared/ordersData";

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const{ordenNo,setOrdenNo}= useState(7248)

  const [ordersList, setOrdersList] = useState(orders);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (form) => {
    const {placa,fechaIngreso,nombreCompleto,kilometraje,marca,modelo,trabajos,mecanico} = form
    const nuevaOrden = (prev) => ([...prev, {
      placa,
      fecha: fechaIngreso,
      nombreCliente: nombreCompleto,
      kilometraje,
      marca,
      modelo,
      trabajo: trabajos,
      mecanico,
      ordenNo
    }])
    setOrdersList(nuevaOrden)
    console.log(ordersList)
  }
  return (
    <OrderContext.Provider
      value={{ ordersList, setOrdersList, register, handleSubmit, formState: { errors }, onSubmit}}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext