import React from "react";
import styles from "./index.module.scss";
import Layout from "@components/Layout";
import { Link } from "react-router-dom";
import { Button } from "antd-mobile";
const Home: React.FC<Record<string, never>> = () => {
  return (
    <Layout>
      <div className={styles.test}>home</div>
      <Link to="/test">
        <Button color="warning">to test1</Button>
      </Link>
    </Layout>
  );
};
export default Home;
