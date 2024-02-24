<script setup>
import { reactive, toRefs, computed, ref } from 'vue';
import Taro, { useDidShow } from '@tarojs/taro';
import { useUserStore } from '@/store/modules/user';
import { GET_ENV_TYPE, IS_H5, IS_MINI_PROGRAM } from '@/utils/enums';
import { My } from '@nutui/icons-vue-taro';
import defaultAvatar from '@/assets/icon/default-avatar.png';
import AuthorPhoneNumber from '@/components/AuthorPhoneNumber';

import styles from './index.module.scss';

const userStore = useUserStore();

const userInfo = computed(() => userStore.getUserInfo);

const showVantDialog = ref(false);

const secondConfirm = () => {
  showVantDialog.value = true;
};

const dialogCancelHandle = () => {
  showVantDialog.value = true;
};

const confirmLoginOut = () => {
  // wsCache.clear();
  // resetRouter(); // 重置静态路由表
  // replace("/login");
};
</script>

<template>
  <div :class="styles['user-center']">
    <header :class="styles.header">
      <div :class="styles.header__container">
        <div :class="styles['base-info']">
          <div :class="styles['header-img']">
            <!-- <van-image src="" class="header-img__img"> </van-image> -->
            <nut-avatar size="large">
              <img :src="defaultAvatar" />
            </nut-avatar>
          </div>
          <div :class="styles.info">
            <div :class="styles['un-login']" v-if="IS_MINI_PROGRAM">
              <div v-if="userInfo.phone" :class="styles['user-info']">
                <div>{{ userInfo.nickName }}</div>
                <div>{{ userInfo.phone }}</div>
              </div>
              <AuthorPhoneNumber v-else />
              <!-- <button
                class="login-btn"
                open-type="getPhoneNumber"
                @getPhoneNumber="getPhoneNumberHandle"
              >
                登录/注册
              </button> -->
            </div>
            <div v-else>
              <div v-if="userInfo.phone" :class="styles['user-info']">
                <div>{{ userInfo.nickName }}</div>
                <div>{{ userInfo.phone }}</div>
              </div>
              <div v-else :class="styles['login-btn']">登录/注册</div>
            </div>
          </div>
        </div>
      </div>
      <div :class="styles['header-bar']">
        <div :class="styles['header-bar__item']">
          <!-- <van-icon name="clock-o" /> -->
          <span :class="styles.desc">待响应1 <span :class="styles['count-weight']">1</span></span>
        </div>
        <div :class="styles['header-bar__item']">
          <!-- <van-icon name="cluster-o" /> -->
          <span :class="styles.desc">待审批 <span :class="styles['count-weight']">2</span></span>
        </div>
        <div :class="styles['header-bar__item']">
          <!-- <van-icon name="volume-o" /> -->
          <span :class="styles.desc">通知 <span :class="styles['count-weight']">3</span></span>
        </div>
      </div>
    </header>

    <section :class="styles.section">
      <nut-cell title="姓名" desc="张三">
        <template #icon>
          <My />
        </template>
      </nut-cell>
      <nut-cell title="姓名" desc="张三">
        <template #icon>
          <My />
        </template>
      </nut-cell>
      <nut-cell title="姓名" desc="张三">
        <template #icon>
          <My />
        </template>
      </nut-cell>
      <nut-cell title="姓名" desc="张三">
        <template #icon>
          <My />
        </template>
      </nut-cell>
    </section>
    <footer :class="styles.footer" v-if="!IS_MINI_PROGRAM">
      <div :class="styles['login-out']" @click="secondConfirm">退出登录</div>
    </footer>
    <nut-dialog content="这是无标题弹框。" v-model:visible="showVantDialog" @cancel="dialogCancelHandle" @ok="confirmLoginOut" />
  </div>
</template>
