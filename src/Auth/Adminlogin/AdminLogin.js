import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const  AdminLogin = () => {
   const navigate = useNavigate(); // Define navigate here
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const handleSignIn = (event) => {
      event.preventDefault();
      if (!userName.trim() || !password.trim()) {
         setError('Please fill in all fields.');
       } else {
         // Clear any previous errors
         setError('');
         // Redirect to '/dealer-listing'
         navigate('/dealer-listing');
       }
   }
  return (
    <section class="admin-login">
         <div class="container">
            <div class="adminform-inner">
               <div class="login-logo">
                  <a href="#"><img src="../../images/logo.png" alt="logo-img" /></a>
               </div>
               <div class="login-form mt-5">
                  <h3> Admin Login</h3>
                  <p>Welcome to Car Chaser</p>
                  <form onSubmit={handleSignIn}>
                     <div class="form-group mt-5">                
                        <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="User Name"
                         value={userName}
                         onChange={(e) => setUserName(e.target.value)}
                        />                
                     </div>
                   
                     <div class="form-group mt-2">                
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" 
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                     <div class="form-check text-right">
                        <a href="#" >Forget Password?</a>
                     </div>
                     {error && <div className="text-danger">{error}</div>}
                     <button type="submit" className="btn btn-primary w-100 mt-3 py-3">Login</button>
                  </form>
               </div>
               <form>
               </form>
            </div>
         </div>
      </section>
  )
}
