<template>
  <div class="sign-box">
    <div class="header">
      <h2>登 录</h2>
      <nuxt-link to="/register">
        <span>注 册</span>
        <a-icon type="arrow-right" theme="outlined" />
      </nuxt-link>
    </div>
    <section class="logo">
      <nuxt-link to="/"></nuxt-link>
    </section>
    <div class="sign-form">
      <div class="form-item">
        <input type="text" placeholder="用户名/邮箱" v-model="user" />
        <label>
          <a-icon type="meh" theme="outlined" class="lock" />
          <a-icon type="smile" theme="outlined" class="unlock" />
        </label>
      </div>
      <div class="form-item">
        <input type="password" placeholder="密码" v-model="password" />
        <label>
          <a-icon type="lock" theme="outlined" style="font-size:1.5rem;" class="lock" />
          <a-icon type="unlock" theme="outlined" style="font-size:1.5rem;" class="unlock" />
        </label>
      </div>
      <div class="form-item" style="text-align:center;margin-top:20px;">
        <a href="javascript:;" @click="submit"></a>
      </div>
    </div>
    <div class="footer">
      <p>当你停止创造，你的才能就不再重要，剩下的只有品味。品味会排斥其他人，让你变得更狭隘。</p>所以，创造。
    </div>
  </div>
</template>
<script>
export default {
  layout: "block",
  data() {
    return {
      user: "",
      password: ""
    };
  },
  methods: {
    submit() {
      const that = this;
      const payload = {
        user: this.user,
        password: this.password
      };
      this.$store.dispatch("signin", payload).then(res => {
        if (res.success) {
          this.$notification.open({
            message: res.msg,
            description: "即将去往主页",
            duration: 1
          });
          setTimeout(function() {
            that.$router.push("/");
          }, 500);
        } else {
          this.$notification["warning"]({
            message: res.msg,
            duration: 1
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.sign-box {
  text-align: center;
  margin-top: 80px;
  .header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 20px;
    box-sizing: border-box;
    &:after {
      display: table;
      content: "";
      clear: both;
    }
    h2 {
      float: left;
      font-size: 1.8rem;
    }
    a {
      float: right;
      font-size: 1.8rem;
      color: #000;
    }
  }
  .logo {
    a {
      display: inline-block;
      width: 240px;
      height: 80px;
      background-image: url("~assets/images/logo.gif");
      background-size: 120% 200%;
      background-position: center -20px;
      background-repeat: no-repeat;
    }
  }
  .sign-form {
    width: 60%;
    min-width: 200px;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    .form-item {
      position: relative;
      margin-bottom: 15px;
      border-bottom: 2px #666 solid;
      text-align: left;
      &:last-child {
        border: none;
        a {
          display: inline-block;
          width: 40px;
          height: 40px;
          background-image: url("~assets/images/login.gif");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
      }
      input {
        width: 100%;
        padding-left: 30px;
        border: none;
        outline: none;
        font-size: 1.5rem;
        &:focus ~ label {
          .unlock {
            display: block;
          }
          .lock {
            display: none;
          }
        }
      }
      label {
        position: absolute;
        left: 0px;
        top: 12px;
        i {
          font-size: 1.2rem;
          color: #000;
        }
        .unlock {
          display: none;
        }
      }
    }
  }
  .footer {
    margin-top: 60px;
    padding: 0 30px;
  }
}
</style>



