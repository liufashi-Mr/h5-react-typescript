import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import { Button } from "antd-mobile";
const T1: React.FC<Record<string, never>> = () => {
  return <div>test1 默认子路由</div>;
};
const T2: React.FC<Record<string, never>> = () => {
  return <div>test2</div>;
};
const TestRoutes: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <Link to="/test">
        <Button>to test1</Button>
      </Link>
      <Link to="test2">
        <Button>to test2</Button>
      </Link>
      <Outlet />
      <Routes>
        <Route index element={<T1 />} />
        <Route path="test2" element={<T2 />} />
      </Routes>
    </div>
  );
};

export default TestRoutes;
