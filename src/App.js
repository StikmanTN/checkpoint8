import React from "react";
import Home from "./Components/Home";
import More from "./Components/More";
import {  BrowserRouter as Router,  Link,  Outlet,  Route,  Routes,} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Routes>
        <Route path="/" exact element ={<Home />} />
        <Route path="/:id" element ={<More />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
