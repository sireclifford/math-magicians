import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Calculator from './pages/Calculator/Calculator';
import Quote from './pages/Quote/Quote';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
