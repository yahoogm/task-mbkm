import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Task from './components/task/Task';
import Button from './components/button/Button';

const App = () => {
  // useState untuk bagian show & hide input
  const [showInput, setShowInput] = useState(true);

  // state
  const [list, setList] = useState([
    {
      id: 1,
      title: 'Makan',
      complete: false,
    },
    {
      id: 2,
      title: 'Minum',
      complete: false,
    },
  ]);
  const [idEdit, setIdEdit] = useState(null);
  const [inputEdit, setInputEdit] = useState('');
  const [onEdit, setOnEdit] = useState(false);

  const completeTask = (id) => {
    const newTask = list.map((i) => {
      return i.id === id ? { ...i, complete: !i.complete } : { ...i, complete: i.complete };
    });
    setList(newTask);
  };

  // --------- function untuk menambahkan task -------------------
  const addTask = (e) => {
    e.preventDefault();

    const title = e.target.previousSibling.value;

    if (title === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      complete: false,
    };

    setList((prevList) => {
      return [...prevList, newTask];
    });
    setInputEdit('');
  };

  // --------- end function untuk menambahkan task -------------------

  // --------- function untuk delete task -------------------
  const deleteTask = (deleteId) => {
    let updatedList = list.filter((i) => {
      return i.id !== deleteId;
    });
    setList(updatedList);
  };

  // --------- end function untuk delete task -------------------

  // --------- bagian untuk edit task -------------------

  const getEdit = (getTitle, getId) => {
    setIdEdit(getId);
    setInputEdit(getTitle);
    setOnEdit(true);
  };

  const onChangeEdit = (e) => {
    setInputEdit(e.target.value);
  };

  // function edit task
  const editTask = (e) => {
    e.preventDefault();
    const insert = {
      id: idEdit,
      title: inputEdit,
    };
    let updatedList = list.map((i) => {
      return i.id === idEdit ? insert : i;
    });
    setList(updatedList);
    setInputEdit('');
    setOnEdit(false);
  };

  // --------- end bagian untuk edit task -------------------

  return (
    <div>
      <Navbar />
      <div className="space-y-10">
        <div className="flex justify-center mt-20 mb-10">
          <Button
            text={showInput ? 'Hide Todo' : 'Show Todo'}
            onClick={() => setShowInput(!showInput)}
            mode={showInput ? 'bg-blue-400 p-3 rounded-md text-white font-semibold hover:bg-blue-500 shadow-md' : 'bg-green-400 p-3 rounded-md text-white font-semibold hover:bg-green-500 shadow-md'}
          />
        </div>
        {showInput && (
          <form className="bg-blue-300 p-2 rounded-md space-x-2 shadow-md text-center m-auto  w-[32rem]">
            <input type="text" name="name" placeholder="Enter Todo" className="p-3  w-[26rem] rounded-md" value={inputEdit} onChange={onChangeEdit} required />
            <Button
              text={onEdit ? 'Edit' : 'Add'}
              onClick={onEdit ? editTask : addTask}
              mode={onEdit ? 'bg-green-500 p-3 rounded-md text-white font-semibold hover:bg-green-600 shadow-md' : 'bg-blue-400 p-3 rounded-md text-white font-semibold hover:bg-blue-500 shadow-md'}
            />
          </form>
        )}
      </div>
      <div className=" w-[32rem] mx-auto mt-10 break-word">
        {list.map((i) => (
          <Task key={i.id} id={i.id} title={i.title} complete={i.complete} functionDelete={deleteTask} functionEdit={getEdit} functionComplete={completeTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
