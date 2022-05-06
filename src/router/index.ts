import React, { lazy } from "react";
export interface RouteItem {
  path: string; //路径,当路由为index路由时path为父级的path
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
    children: [
      {
        path: "todo", //index路由的path仅仅是用作key
        index: true,
        component: lazy(() => import("@pages/TodoList")),
      },
      {
        path: "test", //index路由的path仅仅是用作key
        component: lazy(() => import("@pages/Test")),
      },
    ],
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
    path: "test/*", //index路由的path仅仅是用作key
    component: lazy(() => import("@pages/TestRoutes")),
  },
  {
    path: "*",
    component: lazy(() => import("@pages/Error/404")),
  },
];
export default routes;
