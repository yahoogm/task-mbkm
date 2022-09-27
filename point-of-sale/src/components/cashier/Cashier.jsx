import React, { useState } from "react";
import AddItems from "../additems/AddItems";
import Items from "../items/Items";

const Cashier = () => {
  const [items, setItems] = useState([]);
  const [showAddItems, setShowAddItems] = useState(true);
  const handleAddItems = (product) => {
    setItems([...items, { ...product }]);
  };

  const handleDelete = (id) => {
    let updateList = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updateList);
  };

  const handleChangeQty = (id) => {
    const newTask = items.map((item) => {
      return item.id === id ? { ...item, qty: item.qty + 1 } : { ...item, qty: item.qty - 1 };
    });
    setItems(newTask);
    console.log(newTask);
  };

  let harga = 0;
  items.forEach((item) => {
    harga += item.price * item.qty;
  });

  return (
    <div>
      <button className="bg-blue-300 p-2 rounded-md shadow-md text-white" onClick={() => setShowAddItems(!showAddItems)}>
        {showAddItems ? "Hide items" : "Show Items"}
      </button>
      {showAddItems && <AddItems onHandleAddItems={handleAddItems} />}

      <table className="w-full border">
        <thead className="">
          <tr>
            <td>no</td>
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
