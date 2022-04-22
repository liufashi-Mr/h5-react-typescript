import React from "react";
import { testRequest } from "@/apis";
const Home: React.FC<{}> = () => {
  testRequest();
  return <div>home</div>;
};
export default Home;
