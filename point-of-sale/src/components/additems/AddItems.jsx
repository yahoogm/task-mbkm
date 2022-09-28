import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Products from '../data/Data.json';

const AddItems = forwardRef((props, ref) => {
  const [list, setList] = useState(Products);

  useImperativeHandle(ref, () => ({
    handleAddBack(data) {
      let addback = [...list, data];
      setList(addback);
    },
  }));

  const handleAdd = (e) => {
    const product = list.find((product) => product.id === parseInt(e.target.value));
    props.onHandleAddItems(product);

    let updateList = list.filter((product) => {
      return product.id !== parseInt(e.target.value);
    });
    setList(updateList);
  };

  return (
    <form>
      <select onChange={handleAdd}>
        <option hidden>keranjang</option>
        {list.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>
    </form>
  );
});

export default AddItems;
