<script setup lang="ts">
import { ref } from 'vue';
import Taro, { useDidShow } from '@tarojs/taro';

import { useUserStore } from '@/store/modules/user';
import { authorization } from '@/api/home';
import { setStorageInfo } from '@/hooks/useCache';

const userStore = useUserStore();

const loginCode = ref('');

// 微信用户授权获取手机号getUserInfo
const taroLogin = async ({ encryptedData, iv }) => {
  Taro.showLoading({ title: '正在登录', mask: true });

  const params = { encryptedData, iv, code: loginCode };
  try {
    const res = await authorization(params);

    if (res.code === '00000-00000') {
      Taro.setStorageSync('token', res.data.token);
      Taro.hideLoading();

      Taro.navigateBack();
      // Taro.reLaunch({url: '/pages/index/index'})
    }
  } catch (error) {
    // demo数据
    setTimeout(() => {
      userStore.setUserInfo({
        phone: '155xxxx9161',
        nickName: 'Tosen',
        avatar: 'https://profile-avatar.csdnimg.cn/384e6ad26c6d4fb59e2615dcb6bb3559_qq_35804247.jpg!1',
      });
    }, 2000);
  }
};

const getPhoneNumberHandle = (e) => {
  console.log('e-', e);
  if (e.detail.errMsg == 'getPhoneNumber:ok') {
    const { detail: { encryptedData = '', iv = '' } = {} } = e;

    if (encryptedData && iv) taroLogin({ encryptedData, iv });
  }
};
const getCode = () => {
  Taro.login({
    success: async (res) => {
      if (res.code) {
        console.log('res.login.code: ', res.code);
        loginCode.value = res.code;
      } else {
        showToast('登录失败！');
      }
    },
  });
};

useDidShow(() => {
  getCode();
});
</script>

<template>
  <button class="login-btn" open-type="getPhoneNumber" @getPhoneNumber="getPhoneNumberHandle">登录/注册</button>
</template>

<style lang="scss">
.login-btn {
  font-size: 40px;
  font-weight: 500;
  border: none;
  background: transparent;
  width: 200px;
  &:after {
    border: none;
  }
}
</style>
