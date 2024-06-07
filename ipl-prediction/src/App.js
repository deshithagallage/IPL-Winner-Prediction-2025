import logo from './images/ipl-logo.png'; // Import the IPL logo
import './App.css';
import PredictionForm from './components/PredictionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IPL 2024 Prediction</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PredictionForm />
    </div>
  );
}

export default App;
