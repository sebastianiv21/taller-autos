//Components
import DescItem from "./DescItem";

import checkListData from "../shared/descListData";

const descList = checkListData.map((item) => (
  <DescItem title={item.title} value={item.value} key={item.title} />
));

const DescList = () => {
  return (
    <section className="p-4 flex flex-col gap-4 h-[322px] flex-wrap">
      {descList}
      <div className="flex  gap-2">
        <label htmlFor="subtotal">SUBTOTAL $ </label>
        <input id="subtotal" type="text" className="grow rounded-md" name="subtotal"  />
      </div>
      <div className="flex  gap-2">
        <label htmlFor="iva">IVA $</label>
        <input id="iva" type="text" className="grow rounded-md" disabled />
      </div>
      <div className="flex  gap-2">
        <label htmlFor="total">TOTAL $</label>
        <input id="total" type="text" className="grow rounded-md" disabled />
      </div>
      <button className="bg-claro p-2 rounded-md" type="submit">Enviar</button>
    </section>
  );
};

export default DescList;