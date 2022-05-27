import React from "react";
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Navbar() 
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");  
  const navigate = useNavigate();

  useEffect(() => {
      setIsLoggedIn(!!token);
    }, [token]);
  
    const haldleSuccessGoogle = (response) => {
      console.log(response);
      navigate("/listmobil");
      console.log(response.tokenId);
      if(response.tokenId) {
          localStorage.setItem("token", token);
          setIsLoggedIn(token);
      }
    }
  
    const haldleFailureGoogle = (response) => {
      console.log(response);
      alert(response);
    }

    function handleLogout(e) {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.clear();
      navigate("/");
      // window.location.reload();
      <GoogleLogout/>
    }

  return ( 
    <header>
    <nav
      className="navbar navbar-expand-md navbar-light bg-light shadow sticky-top"
    >
      <div className="container navbar">
        <a href="/"><div className="logo"></div></a>
        <ul className="menu navbar-nav ms-auto fw-bold">
            <li className="nav-item mx-2 fw-bold">
              <a href="#ourservices" className="nav-link"> Our Services </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#whyus" className="nav-link">Why Us</a>
            </li>
            <li className="nav-item mx-2">
              <a href="#testimonials" className="nav-link">Testimonial</a>
            </li>
            <li className="nav-item mx-2">
              <a href="#faq" className="nav-link">FAQ</a>
            </li>
            <div className="cancel-btn">
              <i className="fas fa-times"></i>
            </div>
            {!isLoggedIn ? (
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login with Google"
                            onSuccess={haldleSuccessGoogle}
                            onFailure={haldleFailureGoogle}
                            cookiePolicy={'single_host_origin'}
                            /> 
                        ) : (
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>
                        )}
        </ul>
        </div>
      <div className="menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
    
  </header>  
  );
}
