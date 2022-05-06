import React from "react";
import styles from "./index.module.scss";
import Layout from "@components/Layout";
const Home: React.FC<Record<string, never>> = () => {
  return <Layout className={styles.test}>home</Layout>;
};
export default Home;
