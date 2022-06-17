// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css';
import About from './components/About';
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
    </div>
  )
}

export default App
