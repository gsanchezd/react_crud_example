export interface ProductoProps { name: string; price: number }

const Producto = ({ name, price }: ProductoProps) => {
  return ( 
    <div>Producto: {name} precio: {price} </div>
  )
}

export default Producto