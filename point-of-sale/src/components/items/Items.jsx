const Items = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>{item.price * item.quantity}</td>
          <td></td>
          <td>Hapus</td>
        </tr>
      ))}
    </>
  );
};

export default Items;
