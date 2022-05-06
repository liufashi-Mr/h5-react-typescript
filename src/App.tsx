import React from "react";
import { Outlet } from "react-router-dom";
const App: React.FC<any> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
