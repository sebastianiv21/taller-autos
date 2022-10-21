//Components
import DescItem from './DescItem'
import useOrderList from '../hooks/useOrderList'
import checkListData from '../shared/descListData'

const descList = checkListData.map((item) => (
  <DescItem
    title={item.title}
    key={item.title}
  />
))

const DescList = () => {
  const { register } = useOrderList()
  return (
    // <section className='p-4 flex flex-col gap-4 h-[300px] flex-wrap w-2/3 justify-center'>
    <section className='p-4 grid grid-cols-1 lg:mx-auto lg:grid-cols-2 gap-4 w-2/3 justify-center'>
      {descList}
      <div className='flex gap-2 items-center'>
        <label htmlFor='subtotal'>SUBTOTAL $ </label>
        <input
          id='subtotal'
          type='text'
          className='grow rounded-md'
          name='subtotal'
          {...register('subtotal')}
        />
      </div>
      <div className='flex  gap-2'>
        <label htmlFor='iva'>IVA $</label>
        <input
          id='iva'
          type='text'
          name='iva'
          className='grow rounded-md'
          {...register('iva')}
        />
      </div>
      <div className='flex  gap-2'>
        <label htmlFor='total'>TOTAL $</label>
        <input
          id='total'
          name='total'
          type='text'
          className='grow rounded-md'
          {...register('total')}
        />
      </div>
      <button
        className='bg-claro p-2 rounded-md lg:col-span-2 w-1/2 mx-auto
         hover:bg-oscuro hover:text-white 
         active:ring active:ring-white'
        type='submit'
      >
        GENERAR ORDEN
      </button>
    </section>
  )
}

export default DescList
