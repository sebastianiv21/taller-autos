
const DescText = () => {
  return (
    <article>
        <div className='flex flex-col'>
            <label htmlFor="problema">Problema reportado por el cliente</label>
            <textarea name="problema" id="problema" cols="30" rows="5" ></textarea>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="trabajos">Trabajos realizados</label>
            <textarea name="trabajos" id="trabajos" cols="30" rows="5" ></textarea>
        </div>
    </article>
  )
}

export default DescText