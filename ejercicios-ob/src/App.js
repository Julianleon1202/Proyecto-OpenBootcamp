import logo from './logo.svg';
import './App.css';
// import Clockclase from './ejercicios-op/Clockclase';
import Clockfuncional from './ejercicios-op/Clockfuncional';
import ListContact from './components/pure/container/list_contact';
import CambioColor from './ejercicios-op/cambioColor';
import RegisterContact from './pages/auth/RegisterContact';
import ChuckNorris from './components/pure/ChuckNorris';

function App() {
  return (
    <div className="App">
          {/* <ListContact></ListContact> */}
          {/* <Clockclase></Clockclase> */}
          {/* <Clockfuncional></Clockfuncional> */}
          {/* <CambioColor></CambioColor> */}
          {/* <RegisterContact></RegisterContact> */}
          <ChuckNorris></ChuckNorris>
    </div>
  );
}

export default App;
