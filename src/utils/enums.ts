import Taro from '@tarojs/taro'
/**
 * @description: ContentType
 */
export enum ContentTypeEnum {
    // form-data qs
    FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
    // form-data upload
    FORM_DATA = "multipart/form-data;charset=UTF-8",
    // json
    JSON = "application/json;charset=UTF-8"
  }
  
  /**
   * @description: 与后端协定的状态 code
   */
  export enum ResultEnum {
    SUCCESS = "SUCCEED",
    ERROR = 1
  }

  /**
   * @description 判断 ENV_TYPE
   */
  export const GET_ENV_TYPE = Taro.getEnv()
  // 小程序环境
  export const IS_MINI_PROGRAM = GET_ENV_TYPE === 'WEAPP'
  // H5环境
  export const IS_H5 = GET_ENV_TYPE === 'WEB'