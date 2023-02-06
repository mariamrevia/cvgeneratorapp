
import './App.css';
import HomePage from './HomePage';
import PersonalInfo from './PersonalInfo';
import ExperiencePage from './ExperiencePage';
import { Routes, Route, Navigate } from "react-router-dom"




function App() {
  return (
    <div className="App">

  <Routes>


      <Route path="/" element={<HomePage />} />
      <Route path="/personalInfo" element={<PersonalInfo/>} />  
      <Route path='/experiencePage' element={<ExperiencePage/>} />

  </Routes>
      
      
    
    

    </div>
  );
}

export default App;
