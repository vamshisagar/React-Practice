import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greeting';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Greet></Greet>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
