import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../widgets/Header/Header";
import UseInput from "../pages/UseInput/UseInput";
import React from "react";
import Home from "../pages/Home/Home";
import UseTabs from "../pages/UseTabs/UseTabs";

function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/useInput" element={<UseInput/>}/>
      <Route path="/useTabs" element={<UseTabs/>}/>
    </Routes>
  </Router>;
}

export default App;
