import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from "./components/Tabale";

function App() {
  return (
    <div className="App container">
      <header className="">
        Reza
      </header>
        <div className="row">
            <div className="col">
                Column
            </div>
            <div className="col">
                Column
            </div>
            <div className="col">
                Column
            </div>
        </div>

      <Table/>
    </div>
  );
}

export default App;
