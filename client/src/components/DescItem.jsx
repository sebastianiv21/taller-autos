import React from 'react'

const DescItem = ({title, value}) => {
  return (
    <div className="flex  gap-2">
      <label htmlFor={title}>{title} </label>
      <input id={title} type="text" className="grow rounded-md" value={value}/>
    </div>
  )
}

export default DescItem