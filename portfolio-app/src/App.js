import './App.css';
import 'atropos/css';
import Navbar from './Components/Navbar';
import About from "./Components/About";
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {useState, useEffect} from "react"
import ScaleLoader from "react-spinners/ScaleLoader";
import S from "./Files/logo1.png";
import G from "./Files/logo2.png";
import {HashRouter} from "react-router-dom"
import Landing from './Components/Landing';
import Footer from './Components/Footer';

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
          <img src={S} className="startup-logo"></img>
          <ScaleLoader className="App" color={"#3173c5"} loading={loading} margin={1} height={100} width={1} />
          <img src={G} className="startup-logo"></img>
        </div>
        :
        <div className="body">
          <Navbar></Navbar>
          <Landing></Landing>
          <About ></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      }
    </div>
  );
}

export default App;
