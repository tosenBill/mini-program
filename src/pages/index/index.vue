<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ state.msg }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', state.msg2, true)"
        >登录</nut-button
      >
    </view>
    <nut-cell>
      <nut-list :height="50" :listData="listData" @scroll-bottom="handleScroll">
        <template v-slot="{ item, index }">
          <div class="list-item">{{ index }}</div>
        </template>
      </nut-list>
    </nut-cell>
    <nut-toast
      :msg="state.msg2"
      v-model:visible="state.show"
      :type="state.type"
      :cover="state.cover"
    />
    <div>
      <span v-if="pageLoading">测试pinia...</span>
    </div>
  </view>
</template>

<script setup>
import { reactive, toRefs, ref, computed } from "vue";
import { useReady, hideLoading, useReachBottom } from "@tarojs/taro";
import { loginApi, getDemandOrderPage } from "@/api/home";
import { showLoading } from "@/utils/tips";

import { useAppStore } from "@/store/modules/app";
// import { Dongdong } from "@nutui/icons-vue-taro";

const appStore = useAppStore();
const listData = ref([]);
const loadingFlag = ref(false);
const pageLoading = computed(() => appStore.getPageLoading);

const state = reactive({
  msg: "欢迎使用 NutUI4.0 开发小程序",
  msg2: "你成功了～",
  type: "text",
  show: false,
  cover: false,
});

const handleClick = (type, msg, cover = false) => {
  appStore.setPageLoading(true);
  setTimeout(() => {
    appStore.setPageLoading(false);
  }, 2000);
  loginApi({
    phoneOrName: "izYHnTliv6HygUTJGklsew%3D%3D",
    pwd: "Yre1zUeO9rG20o2U1wAgGw%3D%3D  ",
  });
  // state.show = true;
  // state.msg2 = msg;
  // state.type = type;
  // state.cover = cover;
};

const handleScroll = () => {
  !loadingFlag.value && getData();
};

const getData = async () => {
  loadingFlag.value = true;
  showLoading();
  try {
    const { records } = await getDemandOrderPage({
      current: 1,
      size: 10,
      classify: 0,
    });
    listData.value = listData.value.concat([...records]);
  } finally {
    hideLoading();
    loadingFlag.value = false;
  }
};

useReady(() => {
  getData();
});
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.nut-cell {
  height: calc(100vh - 400px);
  overflow: hidden;
}
.nut-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  background-color: #f4a8b6;
  border-radius: 20px;
}
</style>
