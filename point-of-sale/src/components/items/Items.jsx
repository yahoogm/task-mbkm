const Items = ({ items, handleDelete, handleChangeQty }) => {
  return (
    <>
      {items.map((item, index) => (
        <tr key={item.id} className="border">
          <td>{index + 1}</td>
          <td>{item.title}</td>

          <td>
            <input type="number" onChange={() => handleChangeQty(item.id)} value={item.qty}></input>
          </td>
          <td>{item.price}</td>
          <td>{item.price * item.qty}</td>
          <td onClick={() => handleDelete(item.id)}>Delete</td>
        </tr>
      ))}
    </>
  );
};

export default Items;
