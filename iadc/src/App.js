//imports


import logo from './logo.svg';
import './App.css';

import React, { Component } from "react"; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import Bootstrap
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavDropdown from 'react-bootstrap/NavDropdown'

// Import from react-router-dom
//import { Switch, Route, Link } from "react-router-dom";


//import de los component
import Home from './Components/Home/home.component'
import Tutorial1 from './Components/Tutorial1/tutorial1.component'

function App() {
  return (
    <div className="App">
      <header className="header">
        
      </header>
        <Container>
          <Row>
            <Col md={12}>
            <Router>
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />}/>
               <Route path="/tutorial-1" element={<Tutorial1 />}/>
             </Routes>
           </Router>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
