const Busqueda = () => {
  return (
    <div className='flex items-center gap-2 mt-5 bg-base p-3 px-5 mx-auto rounded-md'>
      <label htmlFor='buscar'>Buscar...</label>
      <input
        id='buscar'
        type='text'
        className='grow rounded-md'
        name='buscar'
      />
    </div>
  )
}

export default Busqueda
