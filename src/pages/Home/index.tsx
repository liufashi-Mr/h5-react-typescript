import React from "react";
import styles from "./index.module.scss";
import Layout from "@components/Layout";
const Home: React.FC<Record<string, never>> = () => {
  return (
    <Layout>
      <div className={styles.test}>home</div>
    </Layout>
  );
};
export default Home;
