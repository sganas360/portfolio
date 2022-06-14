import './App.css';
import 'atropos/css';
import Navbar from './Components/Navbar';
import About from "./Components/About";
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {useState, useEffect} from "react"
import RingLoader
from "react-spinners/RingLoader";
import logo from "./Files/logo192.png"
import {HashRouter} from "react-router-dom"

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {
        loading
        ?
        <div className='App'>
          <img src={logo}></img>
          <RingLoader className="App" color="red" loading={loading} size={50} />
          <img src={logo}></img>
        </div>
        :
        <HashRouter>
          <Navbar></Navbar>
          <About ></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
        </HashRouter>
      }
    </div>
  );
}

export default App;
