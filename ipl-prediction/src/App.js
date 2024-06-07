import logo from './images/ipl-logo.png'; // Import the IPL logo
import './App.css';
import PredictionForm from './components/PredictionForm';
import PercentageBar from './components/PercentageBar'; // Import the PercentageBar component

function App() {
  // Example values for demonstration
  const team1name = "Royal Challengers Bangalore";
  const team2name = "Team B";
  const percentage = 75; // Example percentage value

  return (
    <div className="App">
      <header className="App-header">
        <h1>IPL 2024 Prediction</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PredictionForm />
      <PercentageBar team1name={team1name} team2name={team2name} percentage={percentage} />
    </div>
  );
}

export default App;
