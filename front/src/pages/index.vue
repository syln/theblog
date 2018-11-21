<template>
  <div class="container1">
    <a-row type="flex" justify="space-between" :gutter="30">
      <a-col :span="17" class="main-box">
        <div class="tweet-box" v-if="username">
          <textarea class="text-box" placeholder="说点什么...(ctrl+enter可直接发送）" @keyup.ctrl.13="handlePost" v-model.trim="postContent"></textarea>
          <div style="text-align:right;">
            <a-button :loading="loading" @click="handlePost" :disabled="enablePost">发 布</a-button>
          </div>
        </div>
        <div class="tweet-list">
          <Postlist :datalist="postListdata" v-on:emitDelete="handleDeletePost" />
        </div>
      </a-col>
      <a-col :span="7">

      </a-col>
    </a-row>
  </div>
</template>

<script>
import Postlist from "../components/PostList";
export default {
  components: {
    Postlist
  },
  created() {
    this.$store.dispatch("queryUser");
    this.$store.dispatch("home/queryPost", {}).then(res => {
      this.post = res.list;
    });
  },

  data: () => {
    return {
      postContent: "",
      btnLoading: false,
      post: []
    };
  },
  computed: {
    enablePost() {
      if (this.postContent == "" || this.postContent == undefined) {
        return true;
      } else {
        return false;
      }
    },
    loading() {
      return this.btnLoading;
    },
    postListdata() {
      return this.post;
    },
    username() {
      if (
        this.$store.state.userInfo !== undefined &&
        this.$store.state.userInfo !== null
      ) {
        return this.$store.state.userInfo.name;
      }
    }
  },
  methods: {
    handlePost() {
      if(this.postContent == ""){
        return;
      }
      this.btnLoading = true;
      this.$store
        .dispatch("home/addPost", {
          content: this.postContent
        })
        .then(res => {
          if (res.success) {
            this.btnLoading = false;
            this.$store.dispatch("home/queryPost", {}).then(res => {
              this.post = res.list;
              this.postContent = "";
            });
          }
        });
    },
    handleDeletePost(val) {
      this.$store.dispatch("home/deletePost", { postId: val }).then(res => {
        if (res.success) {
          this.$store.dispatch("home/queryPost").then(res => {
            this.post = res.list;
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container1 {
  margin: 20px 0;
}
.main-box {
  .text-box {
    width: 100%;
    padding: 10px;
    resize: none;
    border: 2px solid #000;
    outline: none;
    height: 80px;
  }
}
</style>

