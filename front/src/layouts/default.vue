<template>
  <no-ssr>
    <div>
      <Header />
      <div class="container">
        <div class="wrap">
          <nuxt />
        </div>
      </div>
    </div>
  </no-ssr>
</template>
<script>
import Header from "./header";
export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch("checkLogin").then(res => {});
  },
  asyncData(context) {
    // called every time before loading the component
    return { name: "" };
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "./layout.less";
.container {
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  min-height: 80vh;
}
</style>

