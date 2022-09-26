import React, { useState } from 'react';
import AddItems from '../additems/AddItems';
import Items from '../items/Items';

const Cashier = () => {
  const [items, setItems] = useState([]);
  const [showAddItems, setShowAddItems] = useState(false);
  const handleAddItems = (product) => {
    setItems([...items, { ...product }]);
  };

  let harga = 0;
  items.forEach((item) => {
    harga += item.price * item.qty;
  });

  return (
    <div>
      <button className="bg-blue-300 p-2 rounded-md shadow-md text-white" onClick={() => setShowAddItems(!showAddItems)}>
        Add
      </button>
      {showAddItems && <AddItems onHandleAddItems={handleAddItems} />}

      <table className="w-full">
        <thead>
          <tr>
            <td>no</td>
            <td>nama barang</td>
            <td>quantity</td>
            <td>harga</td>
            <td>sub harga</td>
            <td>hapus</td>
          </tr>
        </thead>
        <tbody>
          <Items items={items} />
          <tr>
            <td>total :{harga} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cashier;
