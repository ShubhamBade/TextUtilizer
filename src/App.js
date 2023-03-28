import './App.css';
import AboutUS from './MyModules/AboutUS';
import Navbar from './MyModules/Navbar';
import TextForm from './MyModules/TextForm';
import React,{useState} from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light');

  return (
    <>
      {/* <TextForm/>
      <AboutUS/> */}
      <Router>
      <Navbar title="TextUtilize" aboutText={"About US"} mode={mode}/>
        <Routes>
          {/* <Route path="/" element={<Navbar title="TextUtilize" aboutText={"About US"} mode={mode}/>}/> */}
          <Route path="/about" element={<AboutUS/>}/>
          <Route path="/text" element={<TextForm/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
