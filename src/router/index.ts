import { lazy } from "react";
interface RouteItem {
  path: string;
  component?: any;
  index?: true | false;
  redirect?: string;
}
const routes: Array<RouteItem> = [
  {
    path: "/",
    component: lazy(() => import("@pages/Home")),
  },
];
export default routes;
