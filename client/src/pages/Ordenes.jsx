//Components
import OrdersList from "../components/OrdersList"
import useOrderList from "../hooks/useOrderList"
const Ordenes = () => {
  const {ordersList} = useOrderList()
  console.log(ordersList)
  return (
    <main>
        <article>
            <OrdersList />
        </article>
    </main>
  )
}

export default Ordenes