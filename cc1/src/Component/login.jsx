import {Link} from 'react-router-dom'
import React from 'react';
import './Login.css';
function Login(){
    return(
    <div>
    <header>
        <h1>Online Restaurant Management System</h1>
    </header>

    <section>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <button type="submit">Login</button>
            <p>Sign up free<span><Link to='register'>Sign up</Link></span></p>
        </form>

    </section>

    </div>
    )
}
export default Login;