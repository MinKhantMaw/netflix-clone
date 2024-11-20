import React from "react";
import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}/>
        </Routes>
      <Home></Home>
    </div>
  );
};

export default App;
