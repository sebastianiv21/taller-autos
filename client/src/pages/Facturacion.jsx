//Components
import CheckList from "../components/CheckList";
import Description from "../components/Description";

const Facturacion = () => {
  return (
    <main>
        <article className="container mt-10 text-oscuro">
            <h2 className="w-5/6 mx-auto font-bold">ORDEN DE REPARACIÓN No. 77283</h2>
            <form className="flex flex-col gap-3">
            <CheckList />
            <Description />
            </form>
        </article>
    </main>
  )
}

export default Facturacion