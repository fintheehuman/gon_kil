import hunter from './gon_kil.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hunter} alt="green" />
        <p>
          <strong>Hunter X Hunter</strong>
          <br></br> <br></br>
          Gon and Killua
        </p> <br /> <br />
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
