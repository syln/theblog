import Vue from 'vue';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
})

VeeValidate.Validator.extend('name', {
  getMessage: function (field) {
    return "请输入正确格式的" + field + "(英文数字中文)"
  },
  validate: function (value) {
    return /^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(value);
  }
})

Vue.config.productionTip = false
export default () => {
  Vue.use(VeeValidate, {
    i18n,
    i18nRootKey: 'validation',
    dictionary: {
      zh_CN
    }
  })
}
