import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from "./ProjectDisplay";

function App() {
  return<div className='App'>
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/project/:id" element={<ProjectDisplay />} />
    <Route path="/experience" element={<Experience />} />

  </Routes>
  <Footer/>
</Router>
  </div>
}

export default App;
