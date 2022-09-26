//Components
import React from "react";
import useOrderList from "../hooks/useOrderList";
import CheckList from "../components/CheckList";
import Description from "../components/Description";
import InfoCliente from "../components/InfoCliente";

const Facturacion = () => {
  const {onSubmit, handleSubmit, register} = useOrderList()
  return (
    <main>
      <article className="container mt-10 text-oscuro">
        <h2 className="w-5/6 mx-auto font-bold">ORDEN DE REPARACIÓN No. 77283</h2>
        <form className="flex flex-col gap-3 " onSubmit={handleSubmit(onSubmit)}>
          <input type="text"
            {...register("prueba", {
              required: {
                value: false
              }
            })}
          />
          <InfoCliente />
          <CheckList />
          <Description />
        </form>
      </article>
    </main>
  )
}

export default Facturacion