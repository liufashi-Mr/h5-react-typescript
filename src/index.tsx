import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<App />}>
          {routes.map((route) => {
            return <Route key={route.name} path={route.path} element={<route.component />} />;
          })}
        </Route>
        {/* <Route path="*" element={<App />}>
          {routes.map((route) => {
            return <Route key={route.path} path={route.path} element={<route.component />} />;
          })}
        </Route> */}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
