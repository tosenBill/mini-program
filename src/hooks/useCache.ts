import Taro from '@tarojs/taro'
/**
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 */
export const setStorageInfo = (key: string, info: object, callback: Function = () => {}) => {
  Taro.setStorageSync(key, info)

  callback()
}
export const getStorageInfo = (key: string) => {
  return Taro.getStorageSync(key)
}

// import WebStorageCache from 'web-storage-cache'

// type CacheType = "sessionStorage" | "localStorage";

// export const useCache = (type: CacheType = "sessionStorage") => {
//   const wsCache: WebStorageCache = new WebStorageCache({
//     storage: type
//   });

//   return {
//     wsCache
//   };
// };
