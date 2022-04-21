import React from "react";
import { Button } from "antd-mobile";
import { Link, Outlet } from "react-router-dom";
const App: React.FC<any> = () => {
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
};

export default App;
