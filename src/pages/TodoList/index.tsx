import React from "react";
import Layout from "@components/Layout";
import { Button } from "antd-mobile";
import { Link } from "react-router-dom";
const TodoList: React.FC<any> = () => {
  return (
    <Layout>
      TodoList
      <Link to="test">
        <Button>to test page</Button>
      </Link>
    </Layout>
  );
};
export default TodoList;
