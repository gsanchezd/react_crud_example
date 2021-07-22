import { useState } from 'react' 

interface ProductoFormProps {
  addDataHandler: (obj: any) => void;
}

const ProductoForm = ({addDataHandler}: ProductoFormProps) => {
  const [ProductName, setProductName] = useState('');
  const [ProductPrice, setProductPrice] = useState('');

  const handlerChangeProductName = (event: any) => { 
    const { value } = event.target 
    setProductName(value)
  }

  const handlerChangeProductPrice = (event: any) => { 
    const { value } = event.target 
    setProductPrice(value)
  }

  const sendForm = (event: any) => {
    event.preventDefault()
    addDataHandler({name: ProductName, price: ProductPrice});
  }

  return (
    <form>
      <input name="ProductName" value={ProductName} placeholder="Nombre del producto" onChange={handlerChangeProductName}/>
      <input name="ProductPrice" value={ProductPrice} placeholder="1000" onChange={handlerChangeProductPrice}/>  
      <button onClick={sendForm}> Agregar </button>
    </form> 
  )
}

export default ProductoForm
