import logo from './logo.svg';
import './App.css';
// import Clockclase from './ejercicios-op/Clockclase';
import Clockfuncional from './ejercicios-op/Clockfuncional';
// import ListContact from './components/pure/container/list_contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* <ListContact></ListContact> */}
          {/* <Clockclase></Clockclase> */}
          <Clockfuncional></Clockfuncional>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
