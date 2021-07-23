import logo from './logo.svg';
import './App.css';
import HelloFunction from './components/HelloFunc'
import HelloClass from './components/HelloClass'

function App() {
  return (
	<div className="App">
	  <header className="App-header">
		<img src={ logo } class="App-logo" alt="logo"/>
		<h1> Hello Tahmid!</h1>
		{/* <HelloFunction name='Mango' color='Yellow'/>
		<HelloFunction name='Orange' color='Green'/>
		<HelloFunction name='Apple' color='Red'/> */}
		<HelloClass/>
	  </header>
	</div>
  );
}

export default App;
