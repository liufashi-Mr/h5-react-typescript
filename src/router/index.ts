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
  },
  {
    path: "home",
    component: lazy(() => import("@pages/Home")),
  },
  {
    path: "todo",
    component: lazy(() => import("@/pages/Categories")),
  },
  {
    path: "message",
    component: lazy(() => import("@/pages/Messages")),
  },
  {
    path: "my",
    component: lazy(() => import("@/pages/My")),
  },
  {
    path: "*",
    component: lazy(() => import("@pages/Error/404")),
  },
];
export default routes;
