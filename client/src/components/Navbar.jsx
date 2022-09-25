import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>

      <nav className="flex justify-between p-2  text-oscuro bg-base">
        <div className="flex items-center">
          <div>
            <img src="logo-png.png" width="40" alt="TALLER EDGAR PERDOMO Y CIA .LTDA" />
          </div>
          <div className="text-center font-bold ml-2">
            <div>TALLER</div>
            <div>EDGAR PERDOMO Y CIA .LTDA</div>
          </div>
          
          <div className="ml-4">NIT: 800.021.451-0</div>
        </div>
        <div className="flex items-center">
          <Link to="/" className="mx-2 p-2 rounded-md hover:bg-claro">ordenes de reparacion</Link>
          <Link to="/facturacion" className="mx-2 p-2 rounded-md hover:bg-claro">facturacion</Link>
          <Link to="/" className="mx-2 bg-oscuro rounded-md py-1 px-2 text-center text-white flex items-center "> <span className="mb-1">cerrar sesion</span> </Link>
          
        </div>
      </nav>

    </>
  )
}

export default Navbar