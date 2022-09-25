//Components
import DescText from "./DescText";
import DescList from "./DescList";

const Description = () => {
  return (
    <section className="bg-base rounded-md mx-auto p-4 w-5/6 flex">
      <DescText />
      <DescList />
    </section>
  )
}

export default Description