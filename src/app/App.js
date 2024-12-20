import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../widgets/Header/Header";
import UseInput from "../pages/UseInput/UseInput";
import React from "react";
import Home from "../pages/Home/Home";
import UseTabs from "../pages/UseTabs/UseTabs";
import UseEffect from "../pages/UseEffect/UseEffect";
import UseTitle from "../pages/UseTitle/UseTitle";
import UseClick from "../pages/UseClick/UseClick";
import UseConfirm from "../pages/UseConfirm/UseConfirm";
import UsePreventLeave from "../pages/UsePreventLeave/UsePreventLeave";

function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/useEffect" element={<UseEffect/>}/>
      <Route path="/useInput" element={<UseInput/>}/>
      <Route path="/useTabs" element={<UseTabs/>}/>
      <Route path="/useTitle" element={<UseTitle/>}/>
      <Route path="/useClick" element={<UseClick/>}/>
      <Route path="/useConfirm" element={<UseConfirm/>}/>
      <Route path="/usePreventLeave" element={<UsePreventLeave/>}/>
    </Routes>
  </Router>;
}

export default App;
