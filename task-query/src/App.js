import "./App.css";

const supplier = [
  { id: 1, name: "Desi" },
  { id: 2, name: "Dedi" },
  { id: 3, name: "Dodi" },
];

const supplierAndItem = [
  { supplier_id: 1, item_name: "Aqua", item_price: 3000 },
  { supplier_id: 2, item_name: "Buku", item_price: 2000 },
  { supplier_id: 3, item_name: "Ember", item_price: 5000 },
];

const supplier_group_by_id = [
  {
    id: 1,
    name: "Desi",
    item_name: "Aqua",
    item_price: 3000,
  },
  {
    id: 1,
    name: "Desi",
    item_name: "Ember",
    item_price: 2000,
  },
];

const supplier_id_items_container = [];
supplier_group_by_id.forEach((supplier) => {
  if (typeof supplier_id_items_container[supplier.name] === "undefined") {
    supplier_id_items_container[supplier.name] = [];
  }
  if (typeof supplier_id_items_container[supplier.name][supplier.item_name] === "undefined") {
    supplier_id_items_container[supplier.name][supplier.item_name] = [];
  }

  supplier_id_items_container[supplier.name][supplier.item_name].push(supplier);
});

const supplier_product_container = [];
supplierAndItem.forEach((supp) => {});

console.log(supplier_id_items_container);

function App() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="border">Name</th>
            <th className="border">Item Name</th>
            <th className="border">Price</th>
          </tr>
        </thead>
        <tbody>
          {supplier_id_items_container.map((supplier) => {
            return (
              <tr>
                <td>{supplier.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
