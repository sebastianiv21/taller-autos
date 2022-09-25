//Components
import CheckItem from "./CheckItem";

import checkListData from "../shared/checkListData";

const checkList = checkListData.map((item) => (
  <CheckItem title={item.title} checked={item.checked} key={item.title} />
));

const CheckList = () => {
  return (
    <section className="bg-base rounded-md mx-auto p-4 w-5/6 grid grid-cols-5 gap-4">
      {checkList}
    </section>
  );
};

export default CheckList;
