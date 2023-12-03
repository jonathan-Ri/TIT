//imports


import logo from './logo.svg';
import './App.css';

import React, { Component } from "react"; 

import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
// Import Bootstrap
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavDropdown from 'react-bootstrap/NavDropdown'

// Import from react-router-dom
//import { Switch, Route, Link } from "react-router-dom";


//import de los component
import Home from './Components/Home/home.component'
import Tutorial1 from './Components/Tutorial1/tutorial1.component'
import Tutorial2 from './Components/Tutorial2/tutorial2.component';
import Inicio from './Components/Inicio/Inicio.component'
import Donar from './Components/Donar/Donar.component'
import Fondo from './Components/Fondo/fondo.component'
import Creacion_team from './Components/Creacion_Team/Creacion_team.component';
import Admin2 from './Components/Admin2/Admin2.component'
import Admin3 from './Components/Admin3/Admin3.component'
import Admin4 from './Components/Admin4/Admin4.component'
import Admin5 from './Components/Admin5/Admin5.component'
import Admin8 from './Components/Admin8/Admin8.component'
import Negociación from './Components/Negociación/Negociacion.component'
import Prestigio from './Components/Prestigio/prestigio.component'
import PrimerJuego from './Components/PrimerJuego/Primerjuego.component'
import ResultadoPrestigio from './Components/ResultadoPrestigio/Resultadoprestigio.component'




function App() {
  return (
    <div className="App">
        <Container>
          <Row>
            <Col md={12}>
            <Router>
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />}/>
               <Route path="/tutorial-1" element={<Tutorial1 />}/>
               <Route path="/tutorial-2" element={<Tutorial2 />}/>
               <Route path="/inicio" element={<Inicio />}/>
               <Route path="/donar" element={<Donar />}/>
               <Route path="/Home-admin" element={<Fondo />}/>
               <Route path="/team" element={<Creacion_team />}/>
               <Route path="/Admin2" element={<Admin2 />}/>
               <Route path="/Admin3" element={<Admin3 />}/>
               <Route path="/Admin4" element={<Admin4 />}/>
               <Route path="/Admin5" element={<Admin5 />}/>
               <Route path="/Admin8" element={<Admin8 />}/>
               <Route path="/Negociación" element={<Negociación />}/>
               <Route path="/Prestigio" element={<Prestigio />}/>
               <Route path="/PrimerJuego" element={<PrimerJuego />}/>
               <Route path="/ResultadoPrestigio" element={<ResultadoPrestigio />}/>
               <Route path="/Creacion-team" element={<Creacion_team />}/>

             </Routes>
           </Router>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
