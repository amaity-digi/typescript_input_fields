
import './App.css';
import MyButton from './components/Button';

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <MyButton text = "Click Me" onClick={() => alert("Hello Ashis!")}/>
    </div>
  );
}

export default App;
