import { Link } from "react-router-dom";
import imagen from "../public/logo-png.png"
const Navbar = () => {
  const { user, handleLogout } = useOrderList()
  console.log(user)

  return (
    <>
      <nav className='flex justify-between p-2  text-oscuro bg-base'>
        <div className='flex items-center'>
          <div>
            <img
              // src="logo-edgar.png"
              src={imagen}
              width="40"
              alt="TALLER EDGAR PERDOMO Y CIA .LTDA"
            />
          </div>
          <div className='text-center font-bold ml-2'>
            <div>TALLER</div>
            <div>EDGAR PERDOMO Y CIA. LTDA.</div>
          </div>

          <div className='ml-4'>NIT: 800.021.451-0</div>
        </div>
        <div className='flex items-center'>
          {user && (
            <Link
              to='/ordenes'
              className='mx-2 p-2 rounded-md hover:bg-claro'
            >
              Órdenes de reparación
            </Link>
          )}
          {user && (
            <Link
              to='/facturacion'
              className='mx-2 p-2 rounded-md hover:bg-claro'
            >
              Facturación
            </Link>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className='mx-2 bg-oscuro rounded-md py-1 px-2 text-center text-white flex items-center 
              hover:bg-claro hover:text-oscuro 
         active:ring active:ring-white'
            >
              <span>Cerrar sesión</span>
            </button>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
