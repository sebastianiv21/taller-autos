
const OrderItem = (props) => {
  return (
    <tr>
        <td className="border border-white px-2">{props.placa}</td>
        <td className="border border-white px-2">{props.fecha}</td>
        <td className="border border-white px-2">{props.ordenNo}</td>
        <td className="border border-white px-2">{props.nombreCliente}</td>
        <td className="border border-white px-2">{props.kilometraje}</td>
        <td className="border border-white px-2">{props.marca}</td>
        <td className="border border-white px-2">{props.modelo}</td>
        <td className="border border-white px-2">{props.repuestos}</td>
        <td className="border border-white px-2">{props.trabajo}</td>
        <td className="border border-white px-2">{props.mecanico}</td>
    </tr>
  )
}

export default OrderItem