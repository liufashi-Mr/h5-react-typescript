import React from "react";
import { Button } from "antd-mobile";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import routes from "@/router";
import Home from "@pages/Home";
function App() {
  return (
    <div>
      <Home />
      <Link to="home">
        <Button color="primary">home</Button>
      </Link>
      <Link to="test">
        <Button color="primary">test</Button>
      </Link>
      <Routes>
        <Route></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
