import logo from "./logo.svg";
import "./App.css";
import Hookprac1 from "./components/Hookprac1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hookprac1 />
      </header>
    </div>
  );
}

export default App;
