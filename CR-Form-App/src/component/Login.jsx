import React from "react";
import "./Styling/LoginForm.css"; 
import { Link } from 'react-router-dom';
import Head from './Head'
import Footer1 from "./Footer1";

const LoginForm = () => {


  return (
    <>
    <Head />
    <h1>Login here </h1>
    
    <p>*MSAL coming soon*</p>
    <div className="login-container">
        <Link to="/instruction" className="btn">
            Login 
        </Link>
    </div>
    <Footer1 />
    </>

  );
};

export default LoginForm;
