
import './App.css';
import HomePage from './HomePage';
import PersonalInfo from './PersonalInfo';
import { Routes, Route, Navigate } from "react-router-dom"



function App() {
  return (
    <div className="App">

  <Routes>


      <Route path="/" element={<HomePage />} />
      <Route path="/personalInfo" element={<PersonalInfo/>} />  

  </Routes>
      
      
    
    

    </div>
  );
}

export default App;
