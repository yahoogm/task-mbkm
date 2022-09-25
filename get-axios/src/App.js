import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Table from "./components/table/Table";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setDatas(response.data);
    });
  }, []);

  return (
    <div className="p-16">
      <table className="table-auto text-left">
        <thead className="bg-blue-400 text-white border-2 border-gray-500">
          <tr>
            <th className="p-3">Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {datas.map((data) => {
          return <Table id={data.id} title={data.title} body={data.body} />;
        })}
      </table>
    </div>
  );
}

export default App;
