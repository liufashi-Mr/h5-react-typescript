import React from "react";
import { Button } from "antd-mobile";
import { Link, Outlet } from "react-router-dom";
const App: React.FC<any> = () => {
  return (
    <div>
      <Outlet />

      <Link to="home">
        <Button color="primary">首页</Button>
      </Link>
      <Link to="my">
        <Button color="primary">我的</Button>
      </Link>
    </div>
  );
};

export default App;
