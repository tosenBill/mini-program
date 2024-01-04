import { http } from "@/http";

type ListResult = {
  code: number;
  message: string;
  list: Array<any>;
};

export const loginApi = (params: object): Promise<any> => {
    return http.request({
      url: "/customer/user/login",
      method: "get",
      params: {
        ...params,
        type: "h5"
      }
    });
  };
  // 需求单列表
  export const getDemandOrderPage = (data: object): Promise<any> => {
    return http.request({
      url: "/customer/demandOrder/listDemandOrder",
      method: "post",
      data
    });
  };