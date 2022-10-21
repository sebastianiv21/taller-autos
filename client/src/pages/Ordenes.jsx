//Components
import OrdersList from '../components/OrdersList'
import Busqueda from '../components/Busqueda'

const Ordenes = () => {
  return (
    <main>
      <article className='flex flex-col'>
        <Busqueda />
        <OrdersList />
      </article>
    </main>
  )
}

export default Ordenes
