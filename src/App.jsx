import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import TopNav from './components/TopNav';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav />
        <Home />
      <Footer />
    </>
  )
}

export default App
