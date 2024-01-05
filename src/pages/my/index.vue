<script setup>
import { reactive, toRefs, computed, ref } from "vue";
import Taro, { useDidShow } from "@tarojs/taro";
import { useUserStore } from "@/store/modules/user";
import { GET_ENV_TYPE, IS_H5, IS_MINI_PROGRAM } from "@/utils/enums";
import { My } from "@nutui/icons-vue-taro";
import defaultAvatar from "@/assets/icon/default-avatar.png";
import AuthorPhoneNumber from "@/components/AuthorPhoneNumber";

const userStore = useUserStore();

console.log("userStore.getUserInfo", userStore.getUserInfo);

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
  <div class="user-center">
    <header class="header">
      <div class="header__container">
        <div class="base-info">
          <div class="header-img">
            <!-- <van-image src="" class="header-img__img"> </van-image> -->
            <nut-avatar size="large">
              <img :src="defaultAvatar" />
            </nut-avatar>
          </div>
          <div class="info">
            <div class="un-login">
              <div v-if="userInfo.phone">
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
            <!-- <div class="name">{{ userInfo && userInfo.name }}</div>
            <div class="org">所在单位：{{ userInfo && userInfo.orgName }}</div> -->
            <!-- <div class="rule">角色：设备管理员</div> -->
          </div>
        </div>
      </div>
      <div class="header-bar">
        <div class="header-bar__item">
          <!-- <van-icon name="clock-o" /> -->
          <span>待响应 <span class="count-weight">1</span></span>
        </div>
        <div class="header-bar__item">
          <!-- <van-icon name="cluster-o" /> -->
          <span>待审批 <span class="count-weight">2</span></span>
        </div>
        <div class="header-bar__item">
          <!-- <van-icon name="volume-o" /> -->
          <span>通知 <span class="count-weight">3</span></span>
        </div>
      </div>
    </header>

    <section class="section">
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
    <footer class="footer" v-if="!IS_MINI_PROGRAM">
      <div class="button-77 login-out" @click="secondConfirm">退出登录</div>
    </footer>
    <nut-dialog
      content="这是无标题弹框。"
      v-model:visible="showVantDialog"
      @cancel="dialogCancelHandle"
      @ok="confirmLoginOut"
    />
  </div>
</template>

<style lang="scss">
.user-center {
  // padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: calc(
    80px + env(safe-area-inset-bottom)
  ); /* 兼容 iOS >= 11.2 */
  // padding-bottom: 50px;
  .header {
    position: relative;
    &__container {
      background-image: linear-gradient(45deg, #ab5ff1, #3de5ff);
      height: calc(100vw * 0.5);
      border-bottom-left-radius: 50% 12%;
      border-bottom-right-radius: 50% 12%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      // justify-content: center;
      .base-info {
        display: flex;
        align-items: center;
        max-width: 85%;
        .header-img {
          width: 130px;
          height: 130px;
          background: #fff;
          border-radius: 50%;
          margin-right: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          &__img {
            // width: 60px;
            // height: 60px;
            background: #fff;
          }
          .head-icon {
            height: 60px;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 70px;
          }
        }
        .info {
          color: #fff;
          font-size: 24px;
          .un-login {
            font-size: 40px;
            font-weight: 500;
            // .login-btn {
            //   border: none;
            //   background: transparent;
            //   width: 200px;
            //   &:after {
            //     border: none;
            //   }
            // }
          }
          .name {
            font-size: 32px;
            font-weight: bold;
          }
        }
      }
    }
    .header-bar {
      height: 80px;
      width: 85%;
      position: absolute;
      bottom: -10px;
      transform: translateX(-50%);
      left: 50%;
      background: #fff;
      border-radius: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      align-items: center;
      &__item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        &:not(:last-child)::after {
          content: "";
          display: inline-block;
          height: 20px;
          width: 4px;
          margin-left: 30px;
          background: #1989fa;
        }
        span {
          font-size: 24px;
          margin-left: 4px;
        }
        .count-weight {
          color: #e4393c;
          font-weight: bold;
        }
      }
    }
  }
  .section {
    margin: 30px 20px;
    border-radius: 10px;
    // border: 1px solid #e4e7ed;
    // box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  }
  .footer {
    display: flex;
    justify-content: center;
    /* CSS */
    .button-77 {
      align-items: center;
      appearance: none;
      background-clip: padding-box;
      background-color: initial;
      background-image: none;
      border-style: none;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      flex-direction: row;
      flex-shrink: 0;
      font-family: Eina01, sans-serif;
      font-size: 32px;
      font-weight: 800;
      justify-content: center;
      line-height: 48px;
      margin: 0;
      min-height: 100px;
      outline: none;
      overflow: visible;
      padding: 40px 50px;
      pointer-events: auto;
      position: relative;
      text-align: center;
      text-decoration: none;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: middle;
      width: auto;
      word-break: keep-all;
      z-index: 0;
    }
    .login-out {
      width: 80%;
      height: 80px;
      display: flex;
    }

    @media (min-width: 768px) {
      .button-77 {
        padding: 19px 32px;
      }
    }

    .button-77:before,
    .button-77:after {
      border-radius: 80px;
    }

    .button-77:before {
      background-color: rgba(249, 58, 19, 0.32);
      content: "";
      display: block;
      height: 100%;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -2;
    }

    .button-77:after {
      background-color: initial;
      background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
      bottom: 4px;
      content: "";
      display: block;
      left: 4px;
      overflow: hidden;
      position: absolute;
      right: 4px;
      top: 4px;
      transition: all 100ms ease-out;
      z-index: -1;
    }

    .button-77:hover:not(:disabled):after {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      transition-timing-function: ease-in;
    }

    .button-77:active:not(:disabled) {
      color: #ccc;
    }

    .button-77:active:not(:disabled):after {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
      bottom: 4px;
      left: 4px;
      right: 4px;
      top: 4px;
    }

    .button-77:disabled {
      cursor: default;
      opacity: 0.24;
    }
  }
  .dialog-custome-content {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
