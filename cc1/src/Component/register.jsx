import React from 'react';
import './register.css';
function Register(){
  return (  
    <div class="registration-container">
        <form class="registration-form">
            <h2>Registration</h2>
            
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" pattern="[A-Za-z]+" title="Only characters are allowed" required/>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" minlength="8" title="Minimum 8 characters required" required/>
            
            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" title="Passwords must match" required/>
            
            <button type="submit">Register</button>
        </form>
    </div>
  );
}
export default Register;