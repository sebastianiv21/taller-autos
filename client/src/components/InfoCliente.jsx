import React from "react";

const InfoCliente = () => {
    return(
        <>
           <section className="informacion-cliente bg-base rounded-md mx-auto p-6 w-5/6 grid grid-cols-3 gap-4">
              <div className="flex  gap-2">
                <label htmlFor="fechaIngreso">Fecha de Ingreso</label>
                <input id="fechaIngreso" type="text" className="grow rounded-md" name="fechaIngreso"/>
              </div>
              <div className="flex gap-2">
                <label htmlFor="fechaSalida">Fecha de Salida</label>
                <input id="fechaSalida" type="text" className="grow rounded-md"/>
              </div>
              <div className="flex gap-2">
                <label htmlFor="kilometraje">Kilometraje</label>
                <input id="kilometraje" type="text" className="grow rounded-md"/>
              </div>
              <div className="col-span-2 flex gap-2">
                <label htmlFor="nombreUsuario">Nombre Completo</label>
                <input id="nombreUsuario" type="text" className="grow rounded-md"/>
              </div>
              <div className="flex gap-2">
                <label htmlFor="identificacion">C.C/NIT</label>
                <input id="identificacion" type="text" className="grow rounded-md"/>
              </div>
              <div className="col-span-2 flex gap-2">
                <label htmlFor="direccion">Direccion</label>
                <input id="direccion" type="text" className="grow rounded-md"/>
              </div>
              <div className="flex gap-2">
                <label htmlFor="telefono">Telefono</label>
                <input id="telefono" type="text" className="grow rounded-md"/>
              </div>
              <div className="col-span-2 flex gap-2">
                <label htmlFor="correo">Correo</label>
                <input id="correo" type="email" className="grow rounded-md"/>
              </div>
              <div className="flex gap-2">
                <label htmlFor="placa">Placa</label>
                <input id="placa" type="text" className="grow rounded-md"/>
              </div>
              <div className="flex gap-2">
                <label htmlFor="marca">Marca</label>
                <input id="marca" type="text" className="grow rounded-md"/>
              </div>
              <div className="flex gap-2">
                <label htmlFor="linea">Linea</label>
                <input id="linea" type="text" className="grow rounded-md"/>
              </div>
              <div className="flex gap-2">
                <label htmlFor="modelo">Modelo</label>
                <input id="modelo" type="text" className="grow rounded-md"/>
              </div>
              
           </section>
        </>
    )
}
export default InfoCliente
