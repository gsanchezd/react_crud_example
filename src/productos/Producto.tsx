import { useState } from "react";

export interface ProductoProps {
  name: string;
  price: number;
  initial_show?: boolean;
  removeDataHandler: (x: string) => void;
}

const Producto = ({
  name,
  price,
  removeDataHandler,
  initial_show = true,
}: ProductoProps) => {
  const [show, setShow] = useState(initial_show);
  const callRemoveDataHandler = (event: any) => {
    setShow(() => false);
    removeDataHandler(event.target.getAttribute("data-key"));
  };
  return (
    <tr key={name}>
      <td> {name} </td>
      <td> {price} </td>
      <td>
        <button
          className="btn btn-sm btn-danger"
          data-key={name}
          onClick={(e) => callRemoveDataHandler(e)}
        > x </button>
      </td>
    </tr>
  );
};

export default Producto;
