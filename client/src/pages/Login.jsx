import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <main>
      <article className="container">
        <section className="flex">
          <form className="bg-base rounded-md mx-auto my-20 p-3 text-oscuro text-lg">
            <div className="flex flex-col text-center my-1 mx-5">
              <label htmlFor="username">Usuario</label>
              <input type="text" id="username" className="text-oscuro rounded-md" />
            </div>
            <div className="flex flex-col text-center my-1 mx-5">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" className="text-oscuro rounded-md" />
            </div>
            <div className="text-center text-white my-1 mx-5">
              <button className="bg-oscuro rounded-md py-1 px-2 text-sm mt-3" onClick={()=> navigate('/facturacion')}>Iniciar sesión</button>
            </div>
          </form>
        </section>
      </article>
    </main>
  );
};

export default Login;
