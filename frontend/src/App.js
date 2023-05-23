import './App.css';
import React from 'react';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import Donations from './components/Donations';
import AddDonation from './components/AddDonation';
import AllDonations from './components/AllDonations';
import EditDonation from './components/EditDonations';
import {BrowserRouter,Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
        <Header/>
        
        <Routes>
          <Route path='/add' element={<AddDonation/>}></Route>
        </Routes>
        <Routes>
          <Route path='/update/:id' element={<EditDonation/>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<AllDonations/>}></Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
