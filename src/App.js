import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import TypeWriter from './TypeWriter';
function App() {
  return (
    <div className="App">
      <NavBar />
      <TypeWriter text={["Software Developer", "Mern Stack Developer"]} typingSpeed={100} erasingSpeed={50} pauseSpeed={1500} />
    </div>
  );
}

export default App;
