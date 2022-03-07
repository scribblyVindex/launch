
import './App.css';


import { Routes, Route, BrowserRouter,  } from "react-router-dom";

import Curtain from './components/curtain';

function App() {
  return (
   
    // <div style={{  backgroundColor:"#DFF6FF"}} className="h-screen   grid grid-cols-1 justify-items-center">
      
    //   <BrowserRouter>
    // <WordState>
    //   <Routes>
    //   <Route exact path="/" element={<Home/>} />
    //   <Route exact path="/game" element = {<WordRace/>}/>
    //   <Route exact path="/login" element = {<Login type='login'/>}/>
    //   <Route exact path="/signup" element = {<Login type='signup'/>}/>
    //   </Routes>
    // </WordState>
    // </BrowserRouter>
    // </div>
    
    <Curtain/>
  );
}

export default App;
