import React from 'react';
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Send from './components/Send';

function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/send" exact element={<Send/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;