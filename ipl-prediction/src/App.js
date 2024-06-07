import logo from './images/ipl-logo.png'; // Import the IPL logo
import './App.css';
import PredictionForm from './components/PredictionForm';
import PercentageBar from './components/PercentageBar'; // Import the PercentageBar component

function App() {
  // Example values for demonstration
  const team1Name = "Royal Challengers Bangalore";
  const team2Name = "Team B";
  const percentage = 75; // Example percentage value

  return (
    <div className="App">
      <header className="App-header">
        <h1>IPL 2024 Prediction</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PredictionForm />
      <PercentageBar team1Name={team1Name} team2Name={team2Name} percentage={percentage} />
    </div>
  );
}

export default App;
