import useOrderList from "../hooks/useOrderList";

//Components
import OrderItem from "./OrderItem";

const OrdersList = () => {
  const { ordersList, setOrdersList } = useOrderList();

  const renderOrdersList = ordersList.map((order) => (
    <OrderItem
      key={order.ordenNo}
      placa={order.placa}
      fecha={order.fecha}
      ordenNo={order.ordenNo}
      nombreCliente={order.nombreCliente}
      kilometraje={order.kilometraje}
      marca={order.marca}
      modelo={order.modelo}
      repuestos={order.repuestos}
      trabajo={order.trabajo}
      mecanico={order.mecanico}
    />
  ));

  return (
    <section>
      <table className="table-auto border border-white w-11/12 mx-auto text-center mt-4">
        <thead className="bg-oscuro text-white">
          <tr>
            <th className="border border-white px-2">PLACA</th>
            <th className="border border-white px-2">FECHA</th>
            <th className="border border-white px-2">ORDEN DE REPARACIÓN</th>
            <th className="border border-white px-2">NOMBRE CLIENTE</th>
            <th className="border border-white px-2">KILOMETRAJE</th>
            <th className="border border-white px-2">MARCA</th>
            <th className="border border-white px-2">MODELO</th>
            <th className="border border-white px-2">REPUESTOS</th>
            <th className="border border-white px-2">TRABAJO REALIZADO</th>
            <th className="border border-white px-2">MECÁNICO</th>
          </tr>
        </thead>
        <tbody className="bg-claro text-oscuro">{renderOrdersList}</tbody>
      </table>
    </section>
  );
};

export default OrdersList;
