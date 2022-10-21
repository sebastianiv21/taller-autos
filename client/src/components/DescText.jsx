import useOrderList from '../hooks/useOrderList'
const DescText = () => {
  const { register } = useOrderList()
  return (
    <article className='grow'>
      <div className='flex flex-col'>
        <label htmlFor='problema'>Problema reportado por el cliente</label>
        <textarea
          name='problema'
          id='problema'
          cols='30'
          rows='3'
          className='rounded-md'
          {...register('problema')}
        ></textarea>
      </div>
      <div className='flex flex-col'>
        <label htmlFor='trabajos'>Trabajos realizados</label>
        <textarea
          name='trabajos'
          id='trabajos'
          cols='30'
          rows='4'
          className='rounded-md'
          {...register('trabajos')}
        ></textarea>
      </div>
      <div className='flex flex-col'>
        <label htmlFor='mecanico'>Mecánico</label>
        <input
          id='mecanico'
          type='text'
          className='grow rounded-md'
          name='mecanico'
          {...register('mecanico')}
        />
      </div>
    </article>
  )
}

export default DescText
