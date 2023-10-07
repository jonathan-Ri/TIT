//imports

import Home from './Components/Home.component'
import logo from './logo.svg';
import './App.css';
import './Css/header.css';
import React, { Component } from "react"; 


// Import Bootstrap
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavDropdown from 'react-bootstrap/NavDropdown'

// Import from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="header">
        header
      </header>
      <body>
        <Container>
          <Row>
            <Col md={12}>
              <Router>
                <Routes>
                  <Route exact path="/" component={Home}/>
                </Routes>
              </Router>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
