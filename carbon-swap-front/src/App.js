import React from 'react';
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"

function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;