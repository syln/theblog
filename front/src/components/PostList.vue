<template>
  <div>
    <ul>
      <template v-for="(v,i) in datalist">
        <li class="article-row" :key="i" v-if="v.type !=='post'">
          <a-row type="flex" :gutter="10">
            <a-col :span="2" style="text-align:center">
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-col>
            <a-col :span="22">
              <p class="username">用户名：</p>
              <a-dropdown :trigger="['click']" placement="bottomCenter" class="r-option">
                <a class="ant-dropdown-link" href="javascript:;" v-if="v.creator == username">
                  <a-icon type="ellipsis" /></a>
                <a-menu slot="overlay">
                  <a-menu-item key="0">
                    <a href="http://www.alipay.com/">收藏</a>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a href="http://www.taobao.com/">删除</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
              <div class="a-box">
                <a href="javascript:;" class="title-pic" style="background-image:url(https://images3.alphacoders.com/829/thumb-1920-829023.jpg)"></a>
                <h3>文章标题</h3>
                <p class="content">
                  文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题
                </p>
                <a-row class="box-footer">
                  <a-col :span="3" class="timestamp">
                    {{v.createdTime}}
                  </a-col>
                  <a-col class="option-col">
                    <a href="javascript:;">
                      <a-icon type="message" />
                      {{v.comments}}
                    </a>
                    <a href="javascript:;">
                      <a-icon type="heart-o" />
                      {{v.likes}}
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </li>
        <li class="post-row" :key="i" v-else>
          <a-row type="flex" :gutter="10">
            <a-col :span="2" style="text-align:center">
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-col>
            <a-col :span="22">
              <p class="username">{{v.creator}}：</p>
              <a-dropdown :trigger="['click']" placement="bottomCenter" class="r-option">
                <a class="ant-dropdown-link" href="javascript:;" v-if="v.creator == username">
                  <a-icon type="ellipsis" /></a>
                <a-menu slot="overlay">
                  <a-menu-item key="0">
                    <a href="javascript:;">收藏</a>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a href="javascript:;" @click="deletePost(v.postId)">删除</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
              <div class="a-box">
                <p class="content">
                  {{v.content}}
                </p>
                <a-row class="box-footer">
                  <a-col :span="3" class="timestamp">
                    {{v.createdTime}}
                  </a-col>
                  <a-col class="option-col">
                    <a href="javascript:;">
                      <a-icon type="message" />
                      {{v.comments}}
                    </a>
                    <a href="javascript:;">
                      <a-icon type="heart-o" />
                      {{v.likes}}
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["datalist"],
  computed: {
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
    deletePost(val) {
      this.$emit("emitDelete", val);
    }
  }
};
</script>
<style lang="less" scoped>
ul {
  margin: 0;
  padding: 0;
  li.post-row,
  li.article-row {
    position: relative;
    padding: 20px 0px;
    border-bottom: 2px solid #000;
    list-style-type: none;
    .username {
      margin: 0;
      margin-bottom: 8px;
      margin-top: 5px;
    }
    .r-option {
      position: absolute;
      right: 5px;
      top: 4px;
    }
    .a-box {
      .option-col {
        a {
          margin-right: 10px;
          color: #666;
        }
      }
    }
    &.article-row {
      .title-pic {
        display: block;
        width: 100%;
        padding-bottom: 30%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>


