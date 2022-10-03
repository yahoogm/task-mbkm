import './App.css';

const supplier = [
  { id: 1, name: 'Desi' },
  { id: 2, name: 'Dedi' },
  { id: 3, name: 'Dodi' },
];

const item = [
  { supplier_id: 1, title: 'Aqua', price: 3000 },
  { supplier_id: 1, title: 'Buku', price: 4000 },
  { supplier_id: 2, title: 'Buku', price: 2000 },
  { supplier_id: 2, title: 'Kecap', price: 2000 },
  { supplier_id: 3, title: 'Ember', price: 5000 },
];

// Function Group By Supplier
const groupBySupplier = supplier.map((s) => {
  const filItemSupplier = item.filter((i) => {
    return s.id === i.supplier_id;
  });
  return { supplier: s, supplier_item: filItemSupplier };
});

// Function group by item
const groupByItem = item.map((i) => {
  const satu = supplier.find((s) => {
    return i.supplier_id === s.id;
  });
  return { supplier: satu, item: i };
});
console.log(groupByItem);

function App() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Group By Supplier</th>
          </tr>
        </thead>
        <tbody>
          {groupBySupplier.map((grup) => (
            <>
              <tr>
                <td className="bg-green-200" colSpan={3}>
                  {grup.supplier.name}
                </td>
              </tr>
              {grup.supplier_item.map((g) => (
                <tr>
                  <td></td>
                  <td>{g.title}</td>
                  <td>{g.price}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Group By Item</th>
          </tr>
        </thead>
        <tbody>
          {groupByItem.map((item) => (
            <>
              <tr>
                <td>{item.item.title}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
