import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "lib-flexible";
import routes, { RouteItem } from "./router";
import Loading from "./components/Loading";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const routerMap: (routes: Array<RouteItem>) => Array<JSX.Element> = routes => {
  return routes.map(route =>
    !route.children?.length ? (
      route.redirect ? (
        route.index ? (
          <Route
            index
            key={route.path}
            element={<Navigate to={route.redirect} />}
          />
        ) : (
          <Route
            path={route.path}
            key={route.path}
            element={<Navigate to={route.redirect} />}
          />
        )
      ) : route.index ? (
        <Route index key={route.path} element={<route.component />} />
      ) : (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      )
    ) : (
      <Route key={route.path} path={route.path}>
        {routerMap(route.children)}
      </Route>
    )
  );
};
root.render(
  <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<App />}>
          {routerMap(routes)}
        </Route>
      </Routes>
    </Suspense>
  </Router>
);
