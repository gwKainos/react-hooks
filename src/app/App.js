import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Header from "../widgets/Header/Header";
import Home from "../pages/Home/Home";
import UseEffect from "../pages/UseEffect/UseEffect";
import UseInput from "../pages/UseInput/UseInput";
import UseTabs from "../pages/UseTabs/UseTabs";
import UseTitle from "../pages/UseTitle/UseTitle";
import UseClick from "../pages/UseClick/UseClick";
import UseConfirm from "../pages/UseConfirm/UseConfirm";
import UsePreventLeave from "../pages/UsePreventLeave/UsePreventLeave";
import UseBeforeLeave from "../pages/UseBeforeLeave/UseBeforeLeave";
import UseFadeIn from "../pages/UseFadeIn/UseFadeIn";
import UseNetwork from "../pages/UseNetwork/UseNetwork";


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
      <Route path="/useBeforeLeave" element={<UseBeforeLeave/>}/>
      <Route path="/useFadeIn" element={<UseFadeIn/>}/>
      <Route path="/useNetwork" element={<UseNetwork/>}/>
    </Routes>
  </Router>;
}

export default App;
