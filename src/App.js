import logo from './logo.svg';
import './App.css';
import Agenda from './components/agenda';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Agenda></Agenda>
      </header>
    </div>
  );
}

export default App;
