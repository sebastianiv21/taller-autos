import { createContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import orders from '../shared/ordersData'

const OrderContext = createContext({})

export const OrderProvider = ({ children }) => {
  const navigate = useNavigate()

  const [ordenNo, setOrdenNo] = useState(7248)
  const [user, setUser] = useState(false)
  const [ordersList, setOrdersList] = useState(orders)

  // Schema facturacion
  const facturacionSchema = yup.object().shape({
    fechaIngreso: yup.string().required('campo requerido'),
    nombreCompleto: yup.string().required('campo requerido'),
    identificacion: yup.string().required('campo requerido'),
    telefono: yup.string().required('campo requerido'),
  })

  // useForm hook destructuration
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(facturacionSchema) })

  const handleLogin = () => {
    setUser(!user)
    navigate('/facturacion')
    console.log(user)
  }

  const handleLogout = () => {
    setUser(!user)
    navigate('/')
    console.log(user)
  }

  const onSubmit = (form) => {
    console.log(form)
    const {
      placa,
      fechaIngreso,
      nombreCompleto,
      kilometraje,
      marca,
      modelo,
      trabajos,
      mecanico,
    } = form

    const nuevaOrden = (prev) => [
      ...prev,
      {
        placa,
        fecha: fechaIngreso,
        nombreCliente: nombreCompleto,
        kilometraje,
        marca,
        modelo,
        trabajo: trabajos,
        mecanico,
        ordenNo,
      },
    ]
    setOrdersList(nuevaOrden)
  }

  // const validation = errors.fechaIngreso?.type === 'required' && (
  //   <p className='text-red-500 text-sm'>campo requerido</p>
  // )
  const validation = errors.fechaIngreso?.type === 'required' && (
    <p className='text-red-500 text-sm'>campo requerido</p>
  )

  return (
    <OrderContext.Provider
      value={{
        ordersList,
        setOrdersList,
        register,
        handleSubmit,
        formState: { errors },
        onSubmit,
        validation,
        user,
        setUser,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext
