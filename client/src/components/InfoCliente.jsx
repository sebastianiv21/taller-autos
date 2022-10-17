import useOrderList from '../hooks/useOrderList'

const InfoCliente = () => {
  const {
    register,
    formState: { errors },
  } = useOrderList()
  return (
    <>
      <section className='informacion-cliente bg-base rounded-md mx-auto p-6 w-5/6 grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='flex  gap-2'>
          <label htmlFor='fechaIngreso'>Fecha de Ingreso</label>
          <input
            id='fechaIngreso'
            type='date'
            className='grow rounded-md'
            name='fechaIngreso'
            {...register('fechaIngreso', {
              required: {
                value: true,
              },
            })}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='fechaSalida'>Fecha de Salida</label>
          <input
            id='fechaSalida'
            type='date'
            className='grow rounded-md'
            name='fechaSalida'
            {...register('fechaSalida', {
              required: {
                value: false,
              },
            })}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='kilometraje'>Kilometraje</label>
          <input
            id='kilometraje'
            type='text'
            className='grow rounded-md'
            name='kilometraje'
            {...register('kilometraje', {
              required: {
                value: false,
              },
            })}
          />
        </div>
        <div className='lg:col-span-2 flex gap-2'>
          <label htmlFor='nombreUsuario'>Nombre Completo</label>
          <input
            id='nombreUsuario'
            type='text'
            className='grow rounded-md'
            name='nombreCompleto'
            {...register('nombreCompleto', {
              required: {
                value: true,
              },
            })}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='identificacion'>C.C/NIT</label>
          <input
            id='identificacion'
            type='text'
            className='grow rounded-md'
            name='identificacion'
            {...register('identificacion', {
              required: {
                value: true,
              },
            })}
          />
        </div>
        <div className='lg:col-span-2 flex gap-2'>
          <label htmlFor='direccion'>Dirección</label>
          <input
            id='direccion'
            type='text'
            className='grow rounded-md'
            name='direccion'
            {...register('direccion', {
              required: {
                value: false,
              },
            })}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='telefono'>Teléfono</label>
          <input
            id='telefono'
            type='text'
            className='grow rounded-md'
            name='telefono'
            {...register('telefono', {
              required: {
                value: true,
              },
            })}
          />
        </div>
        <div className='lg:col-span-2 flex gap-2'>
          <label htmlFor='correo'>Correo</label>
          <input
            id='correo'
            type='email'
            className='grow rounded-md'
            name='correo'
            {...register('correo', {
              required: {
                value: false,
              },
            })}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='placa'>Placa</label>
          <input
            id='placa'
            type='text'
            className='grow rounded-md'
            name='placa'
            {...register('placa', {
              required: {
                value: false,
              },
            })}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='marca'>Marca</label>
          <input
            id='marca'
            type='text'
            className='grow rounded-md'
            name='marca'
            {...register('marca', {
              required: {
                value: false,
              },
            })}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='linea'>Línea</label>
          <input
            id='linea'
            type='text'
            className='grow rounded-md'
            name='linea'
            {...register('linea', {
              required: {
                value: false,
              },
            })}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='modelo'>Modelo</label>
          <input
            id='modelo'
            type='text'
            className='grow rounded-md'
            name='modelo'
            {...register('modelo', {
              required: {
                value: false,
              },
            })}
          />
        </div>
      </section>
    </>
  )
}
export default InfoCliente
