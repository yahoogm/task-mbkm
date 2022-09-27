const Items = ({ items, handleDelete, handleChangeQty }) => {
  return (
    <>
      {items.map((item, index) => (
        <tr key={item.id} className="border">
          <td>{index + 1}</td>
          <td>{item.title}</td>
          <td>
            <input type="number" key={item} onChange={() => handleChangeQty(index)} value={item.qty} />
          </td>
          <td>{item.price}</td>
          <td>{item.price * item.qty}</td>
          <td onClick={() => handleDelete(item.id)} className="cursor-pointer text-red-400 hover:text-red-600">
            Delete
          </td>
        </tr>
      ))}
    </>
  );
};

export default Items;
