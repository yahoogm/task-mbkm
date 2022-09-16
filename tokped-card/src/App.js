import './App.css';
import Card from './components/card/Card';
import Data from './data/Data.json';

const App = () => {
  return (
    <div className="mx-5">
      <div>
        <h1 className="flex justify-center font-bold mt-40 mb-10 text-header text-green-600">Tokopedia</h1>
      </div>
      <div className="flex justify-center space-x-4 my-5">
        {Data.map((datas) => {
          return <Card isi={datas} />;
        })}
      </div>
    </div>
  );
};

export default App;
