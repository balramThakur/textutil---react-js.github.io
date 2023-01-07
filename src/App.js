import './App.css';
import About from './componets/About';
import Form from './componets/Form';
import Navbar from './componets/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="WordCounter.com" />
      <Routes>
        <Route path='/' element={<Form/>}>  
          </Route>
          <Route path='/About' element={<About/>}>  
          </Route>
          
        </Routes>
      </BrowserRouter>
        
     
    </>
  );
}

export default App;
