module.exports = {
    devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: {
        // 配置跨域
        '/api': {
          target: 'https://vue-course-api.hexschool.io/',
          changOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      },
      before: app => {}
    }
  };