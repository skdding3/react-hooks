import logo from "./logo.svg";
import "./App.css";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";
import Hookprac6 from "./components/Hookprac6";

function App({ hasMounted }) {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();

  console.log(hasMounted, hasMountedFromHooks);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {width}
        <Hookprac6 />
      </header>
    </div>
  );
}

export default withHasMounted(App);
