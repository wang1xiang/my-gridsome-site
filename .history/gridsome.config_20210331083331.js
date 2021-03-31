// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// 项目配置

module.exports = {
  siteName: '拉勾教育', // 网页名称
  siteDescription: '大前端', // 对应meta标签
  plugins: [],
  templates: {
    Post: [
      {
        path: '/posts/:id', // 对应nodegridsome.serverz
      },
    ],
  },
}
