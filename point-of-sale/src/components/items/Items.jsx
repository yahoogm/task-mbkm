import { useEffect, useState } from "react";

const Items = ({ items, handleDelete, handleOnChange }) => {
  const [qty, setQty] = useState([1]);
  useEffect(() => {
    items.map((item, index) => setQty([...qty, item.qty]));
  }, [items]);

  return (
    <>
      {qty !== [] &&
        items.map((item, index) => (
          <tr key={item.id} className="border">
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td className="w-14">
              <input
                className="text-center w-full"
                min="1"
                type="number"
                value={qty[index]}
                onChange={(e) => {
                  let quantity = [...qty];
                  quantity[index] = e.target.value;
                  setQty(quantity);
                  handleOnChange(index, e.target.value);
                }}
              />
            </td>
            <td>{item.price}</td>
            <td>{item.price * item.qty}</td>
            <td className="cursor-pointer text-red-500" onClick={() => handleDelete(item.id)}>
              Delete
            </td>
          </tr>
        ))}
    </>
  );
};

export default Items;
