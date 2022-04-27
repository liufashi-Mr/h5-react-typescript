import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "lib-flexible";
import routes, { RouteItem } from "./router";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const routerMap: (routes: Array<RouteItem>) => Array<JSX.Element> = routes => {
  return routes.map(route =>
    !route.children?.length ? (
      route.redirect ? (
        <Route path={route.path} key={route.name} element={<Navigate to={route.redirect} />} />
      ) : route.index ? (
        <Route index key={route.name} element={<route.component />} />
      ) : (
        <Route key={route.name} path={route.path} element={<route.component />} />
      )
    ) : (
      <Route key={route.name} path={route.path}>
        {routerMap(route.children)}
      </Route>
    )
  );
};
root.render(
  <BrowserRouter>
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<App />}>
          {routerMap(routes)}
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
