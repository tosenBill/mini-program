import { defineStore } from "pinia";
import { store } from "@/store";

import { setStorageInfo, getStorageInfo } from "@/hooks/useCache";

// const { wsCache } = useCache();

export const useUserStore = defineStore("user", {
  state: () => ({
      userInfo: getStorageInfo('userInfo')  || {} 
  }),
  getters: {
    getUserInfo(): string {
      return this.userInfo;
    }
  },
  actions: {
    setUserInfo(info: any = "") {
      this.userInfo = info;
      
      setStorageInfo('userInfo', info)
    }
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}
