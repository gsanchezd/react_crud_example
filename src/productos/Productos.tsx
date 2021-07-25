import { useState } from "react";
import Producto from "./Producto";
import ProductoForm from "../productos/ProductoForm";
import dataimport from "./productos.json";

const Productos = () => {
  const dataimport_fix = dataimport.map(v => ({...v, show: true}))
  const [datasource, setData] = useState(dataimport_fix);
  //const [filteredData, setFilteredData] = useState(dataimport_fix.filter(item => item.show === true))

  const addDataHandler = (product: any) => {
    //setFilteredData(() => (datasource.filter(item => item.show === true)))
    setData([...datasource, product]);
  };

  const removeDataHandler = (key: string) => {
    const p = [...datasource].find(x => x.name === key)
    if (p) {
      p.show = false
    }
    setData([...datasource]);
  }

  return (
    <div className="container mt-5 ">
      <table className="table bordered-table">
        <tbody>
        {datasource.filter(item => item.show === true).map((item) => (
            <Producto key={item.name} name={item.name} price={item.price} removeDataHandler={removeDataHandler}/>
        ))}
        </tbody>
        <tr> 
          <td colSpan={3}>
          {datasource.filter(item => item.show === true).length} Elementos 
          </td>
        </tr>
      </table>
      <ProductoForm addDataHandler={addDataHandler} />
    </div>
  );
};

export default Productos;
