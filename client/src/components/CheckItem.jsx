const CheckItem = ({ title, checked }) => {
  return (
    <div className="text-oscuro flex justify-center">
      <label htmlFor={title} className='mr-2' > {title}</label>
      <input
        type="checkbox"
        id={title}
        name={title}
        value={title}
       
      />
    </div>
  );
};

export default CheckItem;
