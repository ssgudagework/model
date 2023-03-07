import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import{BrowserRouter as Router, Route, Link, Switch, Routes} from 'react-router-dom';
import Allproject from './Allproject';
import Create from './pages/Create';
import Users from './pages/Users';


function App() {
  return <>
   <Router>
     
      <Routes>
      <Route path="/Allproject" element={<Allproject/>}></Route>
      <Route path="/Create" element={<Create/>}></Route>
      <Route path="/Users" element={<Users/>}></Route>
      
      </Routes>
    </Router>
  </>
   
    
  
}

export default App;
