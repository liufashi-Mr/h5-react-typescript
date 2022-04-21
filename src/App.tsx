import React from "react";
import { Button } from "antd-mobile";
import { Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Link to="home">
        <Button color="primary">home</Button>
      </Link>
      <Link to="test">
        <Button color="primary">test</Button>
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
