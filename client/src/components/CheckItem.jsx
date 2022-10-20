import useOrderList from '../hooks/useOrderList'
const CheckItem = ({ title }) => {
  const { register } = useOrderList()
  return (
    <div className='text-oscuro flex justify-center items-center'>
      <label
        htmlFor={title}
        className='mr-2'
      >
        {title}
      </label>
      <input
        type='checkbox'
        id={title}
        name={title}
        {...register(`${title}`)}
      />
    </div>
  )
}

export default CheckItem
