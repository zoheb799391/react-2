import React from 'react'
import { Routes,Route } from "react-router-dom";
import Fetch from './components/fetch';
import Table from './components/Table';

const App = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Fetch/>}></Route>
    <Route exact path="/table" element={<Table/>}></Route>


    </Routes>
    </>
  )
}

export default App