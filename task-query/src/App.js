import "./App.css";

const supplier = [
  { id: 1, name: "Desi" },
  { id: 2, name: "Dedi" },
  { id: 3, name: "Dodi" },
];

const item = [
  { supplier_id: 1, title: "Aqua", price: 3000 },
  { supplier_id: 1, title: "Buku", price: 4000 },
  { supplier_id: 2, title: "Buku", price: 2000 },
  { supplier_id: 2, title: "Kecap", price: 2000 },
  { supplier_id: 3, title: "Ember", price: 5000 },
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
  const find = supplier.find((s) => {
    return s.id === i.supplier_id;
  });
  return { item: i, supplier: find };
});

let pushGroup = {};
groupByItem.forEach((g) => {
  if (pushGroup[g.item.title] === undefined) {
    pushGroup[g.item.title] = [];
  }
  pushGroup[g.item.title].push({ name: g.supplier.name, price: g.item.price });
});

let insideGroup = [];
Object.keys(pushGroup).forEach((p) => {
  insideGroup.push({ title: p, item: pushGroup[p] });
});

function App() {
  return (
    <div className="flex justify-center mt-32 space-x-10">
      <table className="w-80 border">
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

      <table className="w-80 border">
        <thead>
          <th>Group By Item</th>
        </thead>
        <tbody>
          {insideGroup.map((grup) => {
            return (
              <>
                <tr>
                  <td className="bg-purple-200" colSpan={3}>
                    {grup.title}
                  </td>
                </tr>
                {grup.item.map((d) => {
                  return (
                    <tr>
                      <td></td>
                      <td>{d.name}</td>
                      <td>{d.price}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
