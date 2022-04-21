import React from "react";
import { Button } from "antd-mobile";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
function App() {
  return (
    <div>
      <Home />
      <Button color="primary">app</Button>
    </div>
  );
}

export default App;
