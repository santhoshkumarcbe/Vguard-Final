import { useState } from 'react'; 
import './login.css'; 
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth' 
import { app } from './firebase'; 
import { useNavigate } from "react-router-dom";

 
function LoginPage() { 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const navigate =useNavigate();
 
  const handleLogin = (e) => { 
    e.preventDefault(); 
    // Perform login logic using email and password state values 
    const auth = getAuth(app); 
    signInWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => { 
        navigate("/userpage");
        alert("sign -in sucessfull") 
        // Signed in 
        const user = userCredential.user; 
        console.log(user); 
        // TODO: Redirect to the desired page or do any other action 
      }) 
      .catch((error) => { 
        const errorCode = error.code; 
        const errorMessage = error.message; 
        console.log(errorCode, errorMessage); 
        alert(errorMessage); 
        // TODO: Display the error message to the user 
      }); 
 
}; 
 
 
  return ( 
    <div className="header"> 
      <div className="container-lg"> 
        <form onSubmit={handleLogin} className="loginpage"> 
          <h1 className='login'>Login</h1> 
          <img src="https://i.ibb.co/bvqgKnm/account.png" width="120" height="120" alt="account" /> 
          <div className="input"> 
            <input type="email" name="email" className="form-input" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} /> 
            <label htmlFor="email" id="email_label" className="labelep">Email</label> 
          </div> 
          <div className="input"> 
            <input type="password" className="form-input" placeholder="Password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} /> 
            <label htmlFor="password" className="labelep">Password</label> 
 
          </div> 
          <p className='fg'><a href="#">Forgot your password?</a></p> 
          <button type="submit" onClick={handleLogin} id="submit_button">Login</button> 
          <div className="social-share"> 
            <a href="#"><i className="fa-brands fa-google"></i></a> 
            or <a href="#"><i className="fa-brands fa-facebook-f"></i></a> 
          </div> 
        </form> 
      </div> 
      <div> 
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto"> 
          <defs> 
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /> 
          </defs> 
          <g className="parallax"> 
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" /> 
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" /> 
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" /> 
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" /> 
          </g> 
        </svg> 
      </div> 
    </div> 
  ); 
} 
 
 
export default LoginPage;