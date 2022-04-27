import React, { lazy } from "react";
export interface RouteItem {
  path?: string; //路径
  name: string; //路由对应的名称,用作key,当子路由为index路由时采用父路由的name
  component?: any; //懒加载组件
  index?: true | false; //是否为默认子路由,配置后不需要配置path属性
  redirect?: string; //重定向路由
  children?: Array<RouteItem>;
}
const routes: Array<RouteItem> = [
  {
    path: "/",
    name: "/",
    redirect: "home",
    component: lazy(() => import("@pages/Home")),
  },
  {
    path: "home",
    name: "Home",
    component: lazy(() => import("@pages/Home")),
  },
  {
    path: "test",
    name: "Test",
    component: lazy(() => import("@pages/Test")),
  },
  {
    path: "*",
    name: "*",
    component: lazy(() => import("@pages/Test")),
  },
];
export default routes;
