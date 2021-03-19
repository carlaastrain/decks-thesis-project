import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <Nav/> 
        <HomePage/> 
      </div>
    </div>
  );
}

export default App;
