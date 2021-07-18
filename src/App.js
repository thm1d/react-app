import logo from './logo.svg';
import './App.css';
import HelloFunction from './components/HelloFunc'
import HelloClass from './components/HelloClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Tahmid!</h1>
        <HelloFunction/>
        <HelloClass/>
      </header>
    </div>
  );
}

export default App;
