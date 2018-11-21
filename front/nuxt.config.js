module.exports = {
  /* srcDir*/
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: 'JiMU',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'JiMU',
        content: '只为创造的社区'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#41b883'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        enforce: 'pre',
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          "modifyVars": {
            "primary-color": "#5dac81" //设置主题色
          },
          javascriptEnabled: true,
          cssModules: true
        }
      });
    },
    postcss: [
      require('postcss-preset-env')(),
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
    ]
  },
  /* plugins */
  plugins: [{
    src: '~plugins/antd',
    ssr: false
  }, {
    src: '~plugins/validate',
    ssr: false
  }],
  css: [
    'ant-design-vue/dist/antd.min.css'
  ]
}
