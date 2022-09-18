import "./App.css";
import { useState } from "react";

function App() {
  //
  const [text, setText] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const input = e.target.previousSibling.value;

    if (input === "") {
      return;
    }

    const newText = {
      id: Date.now(),
      title: input,
      timer: 100,
    };

    setText((prevText) => {
      return [...prevText, newText];
    });
    console.log(newText);
  };

  return (
    <div>
      <form className="p-2 space-x-2 mt-20 flex justify-center bg-red-400">
        <input className="p-2 rounded-md w-96 " placeholder="Enter text"></input>
        <button className="bg-blue-400 p-2 rounded-md shadow-md" onClick={onSubmit}>
          add
        </button>
      </form>

      <div>
        {text.map((i) => (
          <h1 key={i.id}>
            {i.title}-{i.timer}
          </h1>
        ))}
      </div>
    </div>
  );
}
export default App;
