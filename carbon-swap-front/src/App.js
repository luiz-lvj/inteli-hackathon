import React from 'react';
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Send from './components/Send';
import Search from './components/Search';
import Company from './components/Companys';
import './App.css'
import Cbios from './components/Cbios';
import TokenMarket from './components/TokenMarket';

function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/send" exact element={<Send/>} />
        <Route path="/market" exact element={<Search/>} />
        <Route path="/cbios" exact element={<Cbios/>} />
        <Route path="/company" exact element={<Company/>} />

        <Route path="/test" exact element={<TokenMarket/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;