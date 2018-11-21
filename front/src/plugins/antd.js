import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import "../assets/global.less";

Vue.config.productionTip = false
export default () => {
  Vue.use(Antd)
}
