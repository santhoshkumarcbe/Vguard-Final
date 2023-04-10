import './App.css'; 
import { BrowserRouter, Route ,Routes } from 'react-router-dom';  
import AdminPage from './components/adminpage'; 
import LoginPage from './components/loginpage'; 
import UserPage from './components/userpage'; 
import RegisterPage from './components/register';

 
function App() { 
  return ( 
    <div className="App"> 
    
      <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<LoginPage/>} /> 
        <Route path="/userpage" element={<UserPage/>} /> 
        <Route path="/adminpage" element={<AdminPage/>} /> 
        <Route path="/registerpage" element={<RegisterPage/>} /> 
      </Routes> 
    </BrowserRouter> 
    </div> 
  ); 
} 
 
export default App;
