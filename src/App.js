import logo from "./logo.svg";
import "./App.css";
import Hookprac1 from "./components/Hookprac1";
import Hookprac2 from "./components/Hookprac2";
import Hookprac3 from "./components/Hookprac3";
import Hookprac4 from "./components/Hookprac4";
import Hookprac5 from "./components/Hookprac5";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hookprac1 />
        <Hookprac2 />
        <Hookprac3 />
        <Hookprac4 />
        <Hookprac5 />
      </header>
    </div>
  );
}

export default App;
