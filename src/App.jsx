
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration'
import Home from './Components/Home'
import Login from './Components/Login';

function App() {
  
 

  return (
    <Router>
      <>
      
        <div>          
          <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Registration' element={<Registration/>}/>
           <Route path='/Login' element={<Login/>}/>
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
