//Components
import DescItem from "./DescItem";
import useOrderList from "../hooks/useOrderList";
import checkListData from "../shared/descListData";

const descList = checkListData.map((item) => (
  <DescItem title={item.title} value={item.value} key={item.title} />
));

const DescList = () => {
  const { register, formState: { errors } } = useOrderList()
  return (
    <section className="p-4 flex flex-col gap-4 h-[300px] flex-wrap w-2/3 justify-center">
      {descList}
      <div className="flex  gap-2">
        <label htmlFor="subtotal">SUBTOTAL $ </label>
        <input
          id="subtotal"
          type="text"
          className="grow rounded-md"
          name="subtotal"
          {...register("subtotal", {
            required: {
              value: false
            }
          })}
        />
      </div>
      <div className="flex  gap-2">
        <label htmlFor="iva">IVA $</label>
        <input
          id="iva"
          type="text"
          name="iva"
          className="grow rounded-md"
          {...register("iva", {
            required: {
              value: false
            }
          })}
        />
      </div>
      <div className="flex  gap-2">
        <label htmlFor="total">TOTAL $</label>
        <input 
          id="total"
          name="total" 
          type="text" 
          className="grow rounded-md" 
          {...register("total", {
              required: {
                value: false
              }
            })}
          />
      </div>
      <button className="bg-claro p-2 rounded-md" type="submit">GENERAR ORDEN</button>
    </section>
  );
};

export default DescList;
