import React, { useState, useRef } from 'react';
import AddItems from '../additems/AddItems';
import Items from '../items/Items';

const Cashier = () => {
  const refAddItems = useRef(null);
  const [items, setItems] = useState([]);
  const [showAddItems, setShowAddItems] = useState(true);
  const handleAddItems = (product) => {
    setItems([...items, { ...product, qty: 1 }]);
  };

  const handleDelete = (id) => {
    let add = items.find((product) => product.id === id);
    console.log(add);

    let updateList = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updateList);

    refAddItems.current.handleAddBack(add);
  };

  const handleChangeQty = (index, qty) => {
    console.log(index, qty);
    const newItems = [...items];
    newItems[index].qty = qty;
    setItems(newItems);
  };

  let harga = 0;
  items.forEach((item) => {
    harga += item.price * item.qty;
  });

  return (
    <div>
      <button className="bg-blue-300 p-2 rounded-md shadow-md text-white" onClick={() => setShowAddItems(!showAddItems)}>
        {showAddItems ? 'Hide items' : 'Show Items'}
      </button>
      {showAddItems && <AddItems ref={refAddItems} onHandleAddItems={handleAddItems} />}

      <table className="w-full border">
        <thead className="">
          <tr>
            <td>No</td>
            <td>Title</td>
            <td>Qty</td>
            <td>Price</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="">
          <Items items={items} handleDelete={handleDelete} handleChangeQty={handleChangeQty} />
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>Total : {harga} </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Cashier;
