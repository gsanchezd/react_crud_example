import { useState } from 'react'
import Producto from './Producto'
import {ProductoProps} from './Producto'
import dataimport from './productos.json'
import ProductoForm from '../productos/ProductoForm';


const Productos = () => {
  const [datasource, setData] = useState(dataimport)

  const addDataHandler = (product: any) => {
    setData([...datasource, product])
  }

  return ( 
    <div>
      {datasource.map((product: ProductoProps) => (
        <Producto name={product.name} price={product.price}></Producto>
      ))}
      <ProductoForm addDataHandler={addDataHandler}/>

    </div>
  )
}

export default Productos