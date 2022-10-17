import React from 'react'
import useOrderList from '../hooks/useOrderList'
const DescItem = ({ title, value }) => {
  const {
    register,
    formState: { errors },
  } = useOrderList()
  return (
    <div className='flex gap-2 items-center'>
      <label htmlFor={title}>{title} </label>
      <input
        id={title}
        name={title}
        type='text'
        className='grow rounded-md'
        {...register(`${title}`, {
          required: {
            value: false,
          },
        })}
      />
    </div>
  )
}

export default DescItem
