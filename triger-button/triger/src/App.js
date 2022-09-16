import "./App.css";
import Button from "./components/button/Button";
import Header from "./components/navbar/Header";
import Output from "./components/output/Output";

const App = () => {
  return (
    <div>
      <Header />
      <Button />
      <div className="m-auto w-96 bg-red-500 mt-20 p-2 rounded-md space-y-2 border border-black">
        <Output />
      </div>
    </div>
  );
};

export default App;
