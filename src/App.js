import './App.css';
import Header from './Components/Header/Header';
import Background from "./Components/Background/Background";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Home />
    </div>
  );
}

export default App;
