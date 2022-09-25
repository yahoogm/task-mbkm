const Table = ({ id, title, body }) => {
  return (
    <tbody className="bg-gray-100 border-2 border-gray-500">
      <tr>
        <td className="p-3 font-bold">{id}</td>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    </tbody>
  );
};

export default Table;
