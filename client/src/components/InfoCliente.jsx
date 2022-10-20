import useOrderList from '../hooks/useOrderList'

const InfoCliente = () => {
  const {
    register,
    formState: { errors },
  } = useOrderList()
  return (
    <>
      <section className='informacion-cliente bg-base rounded-md mx-auto p-6 w-5/6 grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='flex items-center gap-2'>
          <label htmlFor='fechaIngreso'>Fecha de Ingreso</label>
          <input
            id='fechaIngreso'
            type='date'
            // className='grow rounded-md'
            className={`grow rounded-md ${
              errors.fechaIngreso && 'border-2 border-red-500'
            }`}
            name='fechaIngreso'
            {...register('fechaIngreso')}
          />
          <p className='text-red-500'>{errors.fechaIngreso?.message}</p>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='fechaSalida'>Fecha de Salida</label>
          <input
            id='fechaSalida'
            type='date'
            className='grow rounded-md'
            name='fechaSalida'
            {...register('fechaSalida')}
          />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='kilometraje'>Kilometraje</label>
          <input
            id='kilometraje'
            type='text'
            className='grow rounded-md'
            name='kilometraje'
            {...register('kilometraje')}
          />
        </div>
        <div className='lg:col-span-2 flex items-center gap-2'>
          <label htmlFor='nombreUsuario'>Nombre Completo</label>
          <input
            id='nombreUsuario'
            type='text'
            className={`grow rounded-md ${
              errors.nombreCompleto && 'border-2 border-red-500'
            }`}
            name='nombreCompleto'
            {...register('nombreCompleto')}
          />
          <p className='text-red-500'>{errors.nombreCompleto?.message}</p>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='identificacion'>C.C/NIT</label>
          <input
            id='identificacion'
            type='text'
            className={`grow rounded-md ${
              errors.identificacion && 'border-2 border-red-500'
            }`}
            name='identificacion'
            {...register('identificacion')}
          />
          <p className='text-red-500'>{errors.identificacion?.message}</p>
        </div>
        <div className='lg:col-span-2 flex items-center gap-2'>
          <label htmlFor='direccion'>Dirección</label>
          <input
            id='direccion'
            type='text'
            className='grow rounded-md'
            name='direccion'
            {...register('direccion')}
          />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='telefono'>Teléfono</label>
          <input
            id='telefono'
            type='text'
            className={`grow rounded-md ${
              errors.telefono && 'border-2 border-red-500'
            }`}
            name='telefono'
            {...register('telefono')}
          />
          <p className='text-red-500'>{errors.telefono?.message}</p>
        </div>
        <div className='lg:col-span-2 flex items-center gap-2'>
          <label htmlFor='correo'>Correo</label>
          <input
            id='correo'
            type='email'
            className='grow rounded-md'
            name='correo'
            {...register('correo')}
          />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='placa'>Placa</label>
          <input
            id='placa'
            type='text'
            className='grow rounded-md'
            name='placa'
            {...register('placa')}
          />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='marca'>Marca</label>
          <input
            id='marca'
            type='text'
            className='grow rounded-md'
            name='marca'
            {...register('marca')}
          />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='linea'>Línea</label>
          <input
            id='linea'
            type='text'
            className='grow rounded-md'
            name='linea'
            {...register('linea')}
          />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='modelo'>Modelo</label>
          <input
            id='modelo'
            type='text'
            className='grow rounded-md'
            name='modelo'
            {...register('modelo')}
          />
        </div>
      </section>
    </>
  )
}
export default InfoCliente
