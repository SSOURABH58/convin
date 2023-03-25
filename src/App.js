import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationComp from './components/NavigationComp/NavigationComp';
import History from './pages/History';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavigationComp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </div>
  );
}



export default App;
