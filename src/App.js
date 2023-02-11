
import './App.css';
import HomePage from './HomePage';
import PersonalInfo from './PersonalInfo';
import ExperiencePage from './ExperiencePage';
import Education from './Education';
import { Routes, Route, Navigate } from "react-router-dom"




function App() {
  return (
    <div className="App">

  <Routes>


      <Route path="/" element={<HomePage />} />
      <Route path="/personalInfo" element={<PersonalInfo/>} />  
      <Route path='/experiencePage' element={<ExperiencePage/>} />
      <Route path='/Education' element={<Education/>}/>

  </Routes>
      
      
    
    

    </div>
  );
}

export default App;
