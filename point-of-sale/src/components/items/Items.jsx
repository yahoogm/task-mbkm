import { useState, useEffect } from 'react';
const Items = ({ items, handleDelete, handleChangeQty }) => {
  const [qty, setQty] = useState([1]);
  useEffect(() => {
    items.map((item, index) => setQty([...qty, item.qty]));
  }, [items]);
  return (
    <>
      {qty !== [] &&
        items.map((item, index) => {
          return (
            <tr key={item.id} className="border">
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <input
                  type="number"
                  key={item}
                  onChange={(e) => {
                    let quantity = [...qty];
                    quantity[index] = e.target.value;
                    setQty(quantity);
                    handleChangeQty(index, e.target.value);
                  }}
                  value={qty[index]}
                />
              </td>
              <td>{item.price}</td>
              <td>{item.price * item.qty}</td>
              <td onClick={() => handleDelete(item.id)} className="cursor-pointer text-red-400 hover:text-red-600">
                Delete
              </td>
            </tr>
          );
        })}
    </>
  );
};

export default Items;
