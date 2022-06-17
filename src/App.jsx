// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from './components/Projects';

function App() {
  return (
    <div>
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact></Contact>
    </div>
  )
}

export default App
