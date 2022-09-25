//Components
import DescItem from "./DescItem";

import checkListData from "../shared/descListData";

const descList = checkListData.map((item) => (
  <DescItem title={item.title} value={item.value} key={item.title} />
));

const DescList = () => {
  return (
    <section className="p-4 grid grid-cols-2 gap-4">
      {descList}
    </section>
  );
};

export default DescList;
