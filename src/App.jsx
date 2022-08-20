import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects"
import { FilePdf } from 'react-bootstrap-icons';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Team />
      <Footer />
      <Projects />
      
    </div>

  );
}

export default App;