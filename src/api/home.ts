import { http } from '@/http';
interface IauthorRequst {
  encryptedData: string;
  iv: string;
  code: string;
}

export const loginApi = (params: object): Promise<any> => {
  return http.request({
    url: '/customer/user/login',
    method: 'get',
    params: {
      ...params,
      type: 'h5',
    },
  });
};
// 需求单列表
export const getDemandOrderPage = (data: object): Promise<any> => {
  return http.request({
    url: '/customer/demandOrder/listDemandOrder',
    method: 'post',
    data,
  });
};
// 登录授权
export const authorization = (params: IauthorRequst) => {
  // const { encryptedData, iv, code } = params
  return http.request({
    url: '/user/wx/phone',
    method: 'post',
    params,
  });
};
