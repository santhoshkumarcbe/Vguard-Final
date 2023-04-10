import React, { useState } from 'react'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() { 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
 
  const handleEmailChange = (event) => { 
    setEmail(event.target.value); 
  }; 
 
  const handlePasswordChange = (event) => { 
    setPassword(event.target.value); 
  }; 
 
  const handleSubmit = (event) => { 
    event.preventDefault();    
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    alert("sign up sucessfull")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage); 
    // ..
  });

    // Add your code for registering the user here 
  }; 
 
  return ( 
    <div> 
      <h1>Register</h1> 
      <form onSubmit={handleSubmit}> 
        <label> 
          Email: 
          <input type="email" value={email} onChange={handleEmailChange} /> 
        </label> 
        <br /> 
        <label> 
          Password: 
          <input type="password" value={password} onChange={handlePasswordChange} /> 
        </label> 
        <br /> 
        <button type="submit">Register</button> 
      </form> 
    </div> 
  ); 
} 
 
export default RegisterPage;



