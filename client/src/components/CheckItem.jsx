import useOrderList from '../hooks/useOrderList'
const CheckItem = ({ title, checked }) => {
  const {
    register,
    formState: { errors },
  } = useOrderList()
  return (
    <div className='text-oscuro flex justify-center items-center'>
      <label
        htmlFor={title}
        className='mr-2'
      >
        {' '}
        {title}
      </label>
      <input
        type='checkbox'
        id={title}
        name={title}
        {...register(`${title}`, {
          required: {
            value: false,
          },
        })}
      />
    </div>
  )
}

export default CheckItem
