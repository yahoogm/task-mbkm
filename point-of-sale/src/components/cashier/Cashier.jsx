import React, { useState } from "react";
import Data from "../data/Data.json";
import Items from "../items/Items";

const Cashier = () => {
  const [pilihan, setPilihan] = useState(Data);
  const [terpilih, setTerpilih] = useState(0);
  const [items, setItems] = useState([]);
  const [payment, setPayment] = useState(0);

  const handleAdd = () => {
    const item = pilihan.find((item, index) => index === parseInt(terpilih));
    setItems([...items, { ...item, qty: 1 }]);
    setTerpilih(0);

    let updateList = pilihan.filter((item, index) => {
      return index !== parseInt(terpilih);
    });
    setPilihan(updateList);
  };

  const handleDelete = (id) => {
    let deleteList = items.filter((item) => {
      return item.id !== id;
    });

    let data = items.find((item) => {
      return item.id === id;
    });
    setPilihan([...pilihan, data]);
    setItems(deleteList);
  };

  const handleOnChange = (index, qty) => {
    const newItems = [...items];
    newItems[index].qty = qty;
    setItems(newItems);
  };

  let total = 0;
  items.forEach((item) => {
    total += item.price * item.qty;
  });

  return (
    <div className="p-5 space-y-5 text-lg">
      <select className="cursor-pointer p-2 bg-blue-300 mr-5 rounded-md" onChange={(e) => setTerpilih(e.target.value)}>
        {pilihan.map((item, index) => (
          <option value={index} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>

      <button className="bg-blue-300 rounded-md p-2" onClick={handleAdd}>
        Add
      </button>

      <table className="text-center w-full">
        <thead className="border">
          <tr className="bg-gray-200 font-semibold">
            <td>No</td>
            <td>Title</td>
            <td>Qty</td>
            <td>Price</td>
            <td>Total</td>
            <td>Setting</td>
          </tr>
        </thead>
        <tbody>
          <Items items={items} handleDelete={handleDelete} handleOnChange={handleOnChange} />
        </tbody>
      </table>

      <div className="w-96 bg-blue-300 mx-auto p-5 rounded-md shadow-md">
        <p>Total : {total === 0 ? "0" : `Rp. ${total}`}</p>
        <form className="">
          Payment : <input className="rounded-md p-1" type="text" id="pay" onChange={(e) => setPayment(e.target.value)} value={payment} />
        </form>
        <p>Kembalian : Rp. {payment - total}</p>
      </div>
    </div>
  );
};

export default Cashier;
