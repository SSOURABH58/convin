import { Modal } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ModalPopUp from './components/ModalPopUp/ModalPopUp';
import NavigationComp from './components/NavigationComp/NavigationComp';
import History from './pages/History/History';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavigationComp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
      <ModalPopUp />
    </div>
  );
}



export default App;
