import Producto from './Producto'
import {ProductoProps} from './Producto'
import data from './productos.json'

const Productos = () => {
  return ( 
    <div>
      {data.map((product: ProductoProps) => (
        <Producto name={product.name} price={product.price}></Producto>

      ))}
    </div>
  )
}

export default Productos