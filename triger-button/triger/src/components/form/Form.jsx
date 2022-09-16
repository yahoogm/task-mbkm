const Form = () => {
  return (
    <div className="mt-20 flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} className="bg-blue-300 p-2 w-96 rounded-md space-x-3 space-y-2 shadow-md">
        <input type="text" name="name" placeholder="Enter Todo" className="p-3 w-72 rounded-md" />
        <button className="bg-blue-400 p-2 rounded-md w-16 text-white hover:bg-blue-500">Add</button>
      </form>
    </div>
  );
};

export default Form;
