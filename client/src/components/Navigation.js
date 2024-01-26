import React, {useState, useEffect} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    const buttonStyle = {
        fontSize: '1.3rem', // Adjust the font size as needed
        margin: '0 10px', // Adjust the margin as needed
      };

    const [buttonLabel, setButtonLabel] = useState('Login');
    const [buttonRedirect, setButtonRedirect] = useState('/login');

    useEffect(() => {
      // Check if 'currentUser' exists in localStorage
      const currentUser = localStorage.getItem('currentUser');

      // Set the button label based on the existence of 'currentUser'
      setButtonLabel(currentUser ? JSON.parse(currentUser).name : 'Login');
      setButtonRedirect(currentUser ? '/account' : '/login');
    }, []); // Empty dependency array ensures this effect runs once on component mount

    const logout = () =>{
      localStorage.removeItem('currentUser');
      window.location.href = "/login";
      console.log(localStorage);
    }

  return (
    <AppBar position="sticky" sx={{ backgroundColor:"rgba(0, 0, 0, 1)", color: "AppWorkspace" }} className="navbar">
        <Toolbar style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="toolbar">
         <Typography variant="h3" component="div" className="logo" fontSize={50} >
          THE HOTEL LUXURY
          </Typography>
          <div className="nav-links">
          </div>
          </Toolbar>
          
      <Toolbar style={{ marginLeft: 'auto' }} >
     
        <Link to="/"><Button color="success" style={buttonStyle} className="nav-button" variant="contained">Home</Button></Link>
        <Link to="/rooms"><Button color="success" style={buttonStyle} className="nav-button" variant="contained">Rooms</Button></Link>
        <Button color="success" style={buttonStyle} className="nav-button" variant="contained">Facilities</Button>
        <Button color="success" style={buttonStyle} className="nav-button" variant="contained">Contact</Button>
        <Link to="/register"><Button color="success" style={buttonStyle} className="nav-button" variant="contained">Register</Button></Link>
        <Link to={buttonRedirect}><Button color="success" style={buttonStyle} className="nav-button" variant="contained">{buttonLabel}</Button></Link>
        <Button color="success" style={buttonStyle} className="nav-button" variant="contained" onClick={logout}>Logout</Button>
        
      </Toolbar>
     
    </AppBar>
  );
};

export default Navigation;
