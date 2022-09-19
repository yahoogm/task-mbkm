import './App.css';
import { useState } from 'react';
import Timer from './timer';

function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (input === '') {
      return alert('please input a text');
    }

    const newText = {
      id: Date.now(),
      title: input.text,
      timer: 100,
    };

    setText((prevText) => {
      return [...prevText, newText];
    });
    setInput('');
  };

  return (
    <div>
      <form className="p-2 space-x-2 mt-20 flex justify-center ">
        <input
          className="p-2 rounded-md w-80 text-white bg-blue-400 shadow-md placeholder-white font-semibold"
          placeholder="Enter Name"
          value={input ? input.text : input}
          onChange={(e) => {
            setInput({ ...input, text: e.target.value });
          }}
        ></input>
        <button className="bg-green-300 p-2 rounded-md shadow-md text-white font-semibold" onClick={onSubmit}>
          Add
        </button>
      </form>

      <div className="mt-10 flex justify-center">
        <table className="w-96 table-fixed">
          <thead>
            <tr className="border-2 bg-blue-300  text-white">
              <th className="p-2">Nama</th>
              <th>Waktu</th>
            </tr>
          </thead>
          {text.map((i) => (
            <Timer key={i.id} data={i} />
          ))}
        </table>
      </div>
    </div>
  );
}
export default App;
