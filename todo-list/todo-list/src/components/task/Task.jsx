import { FcApproval, FcFullTrash, FcRefresh } from "react-icons/fc";

const Task = ({ title, id, functionDelete, functionEdit, functionComplete, complete }) => {
  const deleteTask = () => {
    functionDelete(id);
  };

  const showEdit = () => {
    functionEdit(title, id);
  };

  const completeTask = () => {
    functionComplete(id);
  };

  return (
    <h1 className="border pt-4 pb-4 pr-2 pl-2 font-semibold rounded-md flex items-center mb-2 shadow-md relative w-[32rem] bg-blue-400 text-white">
      <span className={complete ? "line-through text-red-500" : ""}>{title}</span>
      <div className="absolute right-2 space-x-1">
        <button onClick={completeTask}>
          <FcApproval className="w-5 h-5 shadow-md rounded-full" />{" "}
        </button>
        <button onClick={showEdit}>
          <FcRefresh className="w-5 h-5 shadow-md rounded-full" />{" "}
        </button>
        <button onClick={deleteTask}>
          <FcFullTrash className="w-5 h-5 shadow-md rounded-full" />{" "}
        </button>
      </div>
    </h1>
  );
};

export default Task;
