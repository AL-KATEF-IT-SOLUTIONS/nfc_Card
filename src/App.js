import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navb from './component/Navbar';
import Section from './component/Section';
import Slide from './component/Slide';

function App() {
  return (
    <div className="App">
        <Navb/>
        <Home/>
        <About/>
        <Section/>
        <Slide/>

    </div>
  );
}

export default App;
