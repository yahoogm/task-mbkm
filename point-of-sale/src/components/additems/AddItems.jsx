import React from 'react';
import Products from '../data/Data.json';

const AddItems = ({ onHandleAddItems }) => {
  const handleAdd = (e) => {
    const product = Products.find((product) => product.id === parseInt(e.target.value));
    onHandleAddItems(product);
  };

  return (
    <form>
      <select onChange={handleAdd}>
        <option hidden>keranjang</option>
        {Products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>
    </form>
  );
};

export default AddItems;
