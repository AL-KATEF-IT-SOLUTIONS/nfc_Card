import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navb from './component/Navbar';
import Section from './component/Section';

function App() {
  return (
    <div className="App">
        <Navb/>
        <Home/>
        <About/>
        <Section/>


    </div>
  );
}

export default App;
