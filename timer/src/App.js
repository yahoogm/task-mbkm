import './App.css';
import { useState } from 'react';
import Timer from './timer';

function App() {
  //
  const [text, setText] = useState([]);
  const [input, setInput] = useState({
    text: '',
    time: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('input', input);

    if (input.text === '') {
      return;
    }

    const newText = {
      id: Date.now(),
      title: input.text,
      timer: 5,
    };

    setText((prevText) => {
      return [...prevText, newText];
    });

    console.log(newText);
  };

  return (
    <div>
      <form className="p-2 space-x-2 mt-20 flex justify-center bg-red-400">
        <input
          className="p-2 rounded-md w-96 "
          placeholder="Enter text"
          value={input.text}
          onChange={(e) => {
            setInput({ ...input, text: e.target.value });
          }}
        ></input>
        <button className="bg-blue-400 p-2 rounded-md shadow-md" onClick={onSubmit}>
          add
        </button>
      </form>

      <div>
        {text.map((i) => (
          <Timer key={i.id} data={i} />
        ))}
      </div>
    </div>
  );
}
export default App;
