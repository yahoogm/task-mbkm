import { useState } from "react";
import Form from "../form/Form";

const Button = () => {
  const [showFormValue, setShowFormValue] = useState();

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        {/* on clik tersebut berfungsi untuk triger button */}
        <button onClick={() => setShowFormValue(!showFormValue)} className="p-3 rounded-md bg-blue-300 text-white hover:bg-blue-400 shadow-md">
          {/* fungsi dibawah berguna ketika button ditekan akan tampil string hide todo,jika belum ditekan maka akan tampil string show todo */}
          {showFormValue ? "Hide Input" : "Show Input"}
        </button>
      </div>
      {/* fungsi dibawah ini untuk menampilkan form yg akan ditampilkan ketika button ditekan */}
      {showFormValue && <Form />}
    </div>
  );
};

export default Button;
