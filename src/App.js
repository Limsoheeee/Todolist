import React from "react";
import Detail from "./components/Detail";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {  
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/detail/" element={<Detail />} />
      </Routes>
      </BrowserRouter>
  
        );
}

export default App;
