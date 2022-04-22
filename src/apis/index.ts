import request from "./request";
import { AxiosPromise } from "axios";
interface ResponseData<T = any> {
  code: number;
  data: T;
  msg: string;
  success: true | false;
}

interface UserInfo {
  username?: "";
}
interface TestProps {
  userId?: string;
}
export const testRequest = (params: TestProps = {}): AxiosPromise<ResponseData<UserInfo>> =>
  request("post", "http://expo.liufashi.top/type/getImg", params);
