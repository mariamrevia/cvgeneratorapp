
import './App.css';
import HomePage from './HomePage';
import PersonalInfo from './PersonalInfo';
import { Routes, Route, Navigate } from "react-router-dom"
import ExperiencePage from './ExperiencePage';



function App() {
  return (
    <div className="App">

  <Routes>


      <Route path="/" element={<HomePage />} />
      <Route path="/personalInfo" element={<PersonalInfo/>} />  
      <Route path='/experiencePage' eleme={<ExperiencePage/>} />

  </Routes>
      
      
    
    

    </div>
  );
}

export default App;
