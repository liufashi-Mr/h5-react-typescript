import React, { lazy } from "react";
export interface RouteItem {
  path: string; //路径,当路由为index路由时path为fu'ji
  component?: any; //懒加载组件
  index?: true | false; //是否为默认子路由,配置后不需要配置path属性
  redirect?: string; //重定向路由
  children?: Array<RouteItem>;
}
const routes: Array<RouteItem> = [
  {
    path: "/",
    redirect: "home",
    component: lazy(() => import("@pages/Home")),
  },
  {
    path: "home",
    component: lazy(() => import("@pages/Home")),
  },
  {
    path: "test",
    component: lazy(() => import("@pages/Test")),
  },
  {
    path: "*",
    component: lazy(() => import("@pages/Test")),
  },
];
export default routes;
