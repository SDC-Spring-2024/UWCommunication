import logo from './logo.svg';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Registration Form Section */}
      <div className="RegistrationSection">
        <h2>Register</h2>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
