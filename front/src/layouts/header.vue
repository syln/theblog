<template>
  <div class="header-wrap">
    <div class="header">
      <div class="logo"></div>
      <div class="menu">
        <ul>
          <li v-for="item in menuList" :key="item.key" :class="{'active':locationName == item.url}">
            <nuxt-link :to="item.url">{{item.title}}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="user-col">
        <div class="unlogin" v-if="!isLogin">
          <nuxt-link to="/signin">登录</nuxt-link>
          <nuxt-link to="/register">注册</nuxt-link>
        </div>
        <div class="logined" v-else>
          <!-- 私信 消息提醒留白区 -->
          <div class="inform-col">
            <a href="javascript:;">
              <a-badge count="25" class="i-badge" />
              <a-icon type="mail" />
            </a>
            <a href="javascript:;">
              <a-badge count="25" class="i-badge" />
              <a-icon type="bell" />
            </a>
          </div>
          <div class="user">
            <a-dropdown :trigger="['click']" placement="bottomCenter">
              <a class="ant-dropdown-link" href="javascript:;"></a>
              <a-menu slot="overlay" class="user-drop-down-menu" style="width: 120px;text-align:center;">
                <a-menu-item>
                  <nuxt-link to="/">我的主页</nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/">我的话题</nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/">设置</nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/">站内指南</nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;" @click="handleSignout">登出</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MENU } from "../utils/menu.js";

export default {
  data() {
    return {};
  },

  components: {},
  methods: {
    handleSignout() {
      this.$store.dispatch("signout", {}).then(res => {
        if (res.success) {
          this.$router.push("/signin");
        }
      });
    }
  },
  computed: {
    menuList() {
      return MENU;
    },
    locationName() {
      return this.$route.path;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    }
  }
};
</script>
<style lang="less" scoped>
@import "~assets/theme.less";
.header-wrap {
  border-bottom: 3px solid #666;
  .header {
    height: 50px;
    max-width: 960px;
    margin: 0 auto;
    &:after {
      display: table;
      content: "";
      clear: both;
    }
  }
  .logo {
    float: left;
  }
  .user-col {
    float: right;
    .unlogin {
      margin-top: 10px;
      a {
        display: inline-block;
        margin: 8px 0px;
        color: #666;
        box-sizing: border-box;
        font-size: 16px;
        &:first-child {
          padding-left: 15px;
          padding-right: 15px;
          border-right: 2px #666 solid;
        }
        &:nth-child(2) {
          padding-left: 15px;
          padding-right: 15px;
        }
      }
    }
  }
  .menu {
    float: left;
    ul {
      margin: 0;
      padding: 0;
      margin-top: 10px;
      &:after {
        content: "";
        display: table;
        clear: both;
      }
    }
    ul li {
      float: left;
      list-style-type: none;
      a {
        font-size: 16px;
        display: block;
        width: 120px;
        text-align: center;
        padding: 8px 0;
        padding-bottom: 6px;
        color: #666;
        box-sizing: border-box;
      }
      &:hover {
        box-sizing: border-box;
        border: 2px #000 solid;
        box-shadow: 6px 0px 0px 0 #999;
        border-bottom: none;
        a {
          color: #000;
          text-decoration: none;
          text-shadow: 1px 0 #7e65b2;
          padding: 6px 0 8px 0;
          width: 116px;
        }
      }
      &.active {
        box-sizing: border-box;
        border: 2px #000 solid;
        box-shadow: 6px 0px 0px 0 #999;
        border-bottom: none;
        a {
          color: #000;
          text-decoration: none;
          text-shadow: 1px 0px #7e65b2;
          padding: 6px 0 8px 0;
          width: 116px;
        }
      }
    }
  }
  .logined {
    vertical-align: middle;
    .inform-col {
      display: inline-block;
      margin-top: 5px;
      vertical-align: middle;
      a {
        display: inline-block;
        position: relative;
        margin-right: 35px;
        color: #666;
        i {
          font-size: 1.5rem;
        }
        .i-badge {
          position: absolute;
          top: -5px;
          right: -20px;
        }
      }
    }
    .user {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .ant-dropdown-link {
    display: inline-block;
    margin-top: 10px;
    width: 40px;
    height: 40px;
    border: 2px solid #666;
    border-bottom: none;
    background-image: url("https://pic.qqtn.com/up/2017-9/15047666217625959.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
.user-drop-down-menu {
  li {
    a {
      letter-spacing: 0.1rem;
    }
  }
}
</style>
