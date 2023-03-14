import logo from './logo.svg';
import './App.css';
import LoginPage from './Routes/LoginPage';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './Routes/HomePage'
import Settings from './Routes/Settings';



/*import CartContext from './Context/CartContext'*/


function App() {
  
  return (
    // <Link to='/'>
    //   <LoginPage/>
    // </Link>
   
  <Routes>
     <Route path="/" element={<LoginPage/>} />
     <Route path="/Home" element={<HomePage/>} />
     <Route path='/Settings' element={<Settings/>}/>
  </Routes>
    
  );
}

export default App;
