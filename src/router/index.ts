import { lazy } from "react";
interface RouteItem {
  path?: string;
  component?: any;
  index?: true | false;
  redirect?: string;
}
const routes: Array<RouteItem> = [
  {
    path: "",
    redirect: "home",
  },
  {
    path: "home",
    component: lazy(() => import("@pages/Home")),
  },
  {
    path: "test",
    component: lazy(() => import("@pages/Test")),
  },
];
export default routes;
