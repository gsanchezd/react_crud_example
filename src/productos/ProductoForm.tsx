import { useState } from "react";

interface ProductoFormProps {
  addDataHandler: (obj: any) => void;
}

const ProductoForm = ({ addDataHandler }: ProductoFormProps) => {
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductNameError, setProductNameError] = useState("");
  const [ProductPriceError, setProductPriceError] = useState("");

  const handlerChangeProductName = (event: any) => {
    const { value } = event.target;
    setProductName(value);
  };

  const handlerChangeProductPrice = (event: any) => {
    const { value } = event.target;
    setProductPrice(value);
  };

  const sendForm = (event: any) => {
    event.preventDefault();
    
    if (ProductName.length === 0) {
      setProductNameError("Debe tener un nombre");
      return;
    } else {
      setProductNameError("");
    }
    
    if (ProductPrice.length === 0) {
      setProductPriceError("Debe tener un precio");
      return;
    } else {
      setProductPriceError("");
    }

    const reg = new RegExp('[0-9].*');
    if (reg.test(ProductPrice) === false ){
      setProductPriceError("Debe ser un número");
    }


    addDataHandler({ name: ProductName, price: ProductPrice, show: true });
  };

  return (
    <form className="form-control">
      <input
        name="ProductName"
        value={ProductName}
        placeholder="Nombre del producto"
        onChange={handlerChangeProductName}
      />{" "}
      {ProductNameError}
      <input
        name="ProductPrice"
        value={ProductPrice}
        placeholder="1000"
        onChange={handlerChangeProductPrice}
      />{" "}
      {ProductPriceError}
      <button onClick={sendForm}> Agregar </button>
    </form>
  );
};

export default ProductoForm;
