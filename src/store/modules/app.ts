import { defineStore } from "pinia";

interface AppState {
    pageLoading: boolean;
}

export const useAppStore = defineStore("app", {
state: (): AppState => {
    return {
        pageLoading: false, // 路由跳转loading
    };
},
getters: {
    getPageLoading(): boolean {
    return this.pageLoading;
    }
},
actions: {
    setPageLoading(pageLoading: boolean) {
        this.pageLoading = pageLoading;
    }
}
});