import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        This app was deployed using GitHub Actions!
      </header>
    </div>
  );
}

export default App;
