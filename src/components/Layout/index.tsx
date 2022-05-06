import React from "react";
import { TabBar } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
const tabs = [
  {
    key: "/home",
    title: "首页",
    icon: <AppOutline />,
  },
  {
    key: "/todo",
    title: "我的待办",
    icon: <UnorderedListOutline />,
  },
  {
    key: "/message",
    title: "我的消息",
    icon: <MessageOutline />,
  },
  {
    key: "/my",
    title: "个人中心",
    icon: <UserOutline />,
  },
];
const Layout: React.FC<any> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  return (
    <div className={styles.container}>
      {children}
      <div className={styles.nav}>
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default Layout;
