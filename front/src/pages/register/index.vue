<template>
  <div class="sign-box">
    <div class="header">
      <h2>注 册</h2>
      <nuxt-link to="/signin">
        <span>登 录</span>
        <a-icon type="arrow-right" theme="outlined" />
      </nuxt-link>
    </div>
    <section class="logo">
      <nuxt-link to="/"></nuxt-link>
    </section>
    <div class="sign-form">
      <div class="form-item">
        <input type="text" v-model.trim="username" placeholder="用户名" v-validate="'required|name|max:15|min:2'" data-vv-as="用户名" name="username" autocomplete="off" />
        <label>
          <a-icon type="meh" theme="outlined" class="lock" />
          <a-icon type="smile" theme="outlined" class="unlock" />
        </label>
      </div>
      <p class="error-tips">{{ errors.first('username') }}</p>
      <div class="form-item">
        <input type="email" v-model.trim="email" placeholder="邮箱" v-validate="'required|email'" data-vv-as="邮箱" name="email" autocomplete="off" />
        <label>
          <a-icon type="mail" theme="outlined" class="lock" />
          <a-icon type="mail" theme="outlined" class="unlock" />
        </label>
      </div>
      <p class="error-tips">{{ errors.first('email') }}</p>
      <div class="form-item">
        <input type="password" v-model.trim="password" name="password" v-validate="'required|min:6'" placeholder="密码" data-vv-as="密码" ref="password" />
        <label>
          <a-icon type="lock" theme="outlined" style="font-size:1.5rem;" class="lock" />
          <a-icon type="unlock" theme="outlined" style="font-size:1.5rem;" class="unlock" />
        </label>
      </div>
      <p class="error-tips">{{ errors.first('password') }}</p>
      <div class="form-item">
        <input type="password" v-model.trim="confirmPassword" name="confirmPassword" v-validate="'required|confirmed:password'" data-vv-as="确认密码" placeholder="确认密码" />
        <label>
          <a-icon type="save" theme="fiiled" style="font-size:1.5rem;" class="lock" />
          <a-icon type="save" theme="filled" style="font-size:1.5rem;" class="unlock" />
        </label>
      </div>
      <p class="error-tips">{{ errors.first('confirmPassword') }}</p>
      <div class="form-item" style="text-align:center;margin-top:20px;">
        <a href="javascript:;" @click="submit"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "block",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    submit() {
      let that = this;
      this.$validator.validate().then(result => {
        if (!result) {
          // do stuff if not valid.
        } else {
          this.$store
            .dispatch("register/submit", {
              name: this.username,
              email: this.email,
              password: this.password,
              confirmPassword: this.confirmPassword,
              $router: this.$router
            })
            .then(res => {
              this.$notification.open({
                message: res.msg,
                description: "即将去往主页",
                duration: 1
              });
              setTimeout(function() {
                that.$router.push("/");
              }, 1000);
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
    .error-tips {
      font-size: 12px;
      height: 18px;
      margin-bottom: 5px;
      text-align: left;
      color: #f75c2f;
    }
    .form-item {
      position: relative;
      margin-bottom: 5px;
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



