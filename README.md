#### 静态网站

##### 什么是静态网站生成器

- 静态网站生成器是使用一系列配置、模板以及数据，生成静态 HTML 文件及相关资源的工具
- 由于它是提前生成静态网页，通常将这个功能也叫预渲染
- 生成的网站不需要类似 PHP 这样的服务器
- 只需要放到支持静态资源的 Web Server 或 CDN 上即可运行

##### 静态网站好处

- 省钱：不需要专业的服务器，只要能托管静态文件的空间即可·
- 快速：不经过后端服务器的处理,只传输内容
- 安全：没有后端程序的执行，自然会更安全

##### 常见静态网站生成器

- Jekyll (Ruby)
- Hexo (Node)
- Hugo(Golang)
- Gatsby (Node/React)
- Gridsome (Node/Vue)
- 另外，Next.js，Nuxt.js 也能生成静态网站，但是它们更多被认为是 SSR(服务端渲染)框架。

##### JAMStack

- 这类静态网站生成器还有个漂亮的名字叫 JAMStack
- JAMStack 的 JAM 是 JavaScript、API 和 Markup 的首字母组合
- 本质上是一种胖前端，通过调用各种 API 来实现更多的功能
- 其实也是一种前后端的模式，只不过离得比较开,甚至前后端来自多个不同的厂商

##### 静态应用使用场景

- 不活合有大量路由页面的应用
  如果您的站点有成百上千条路由页面，则预渲染将非常缓慢。当然，您每次更新只需要做一次，但是可能要花一些时间。大多数人不会最终获得数千条静态路由页面，而只是以防万一
- 不适合有大量动态内容的应用
  如果渲染路线中包含特定于用户查看其内容或其他动态源的内容，则应确保您具有可以显示的占位符组件，直到动态内容加载到客户端为止。否则可能有点怪异

#### GridSome

##### 是什么

- GitHub 仓库：https://github.com/gridsome/gridsome

- 官网：https://gridsome.org/

- Gridsome 是由 Vue.js 驱动的 Jamstack 框架，用于构建默认情况下快速生成的静态生成的网站和应用。

- Gridsome 是 Vue 提供支持的静态站点生成器，用于为任何无头 CMS，本地文件或 API 构建可用于 CDN 的网站

- 使用 Vue.js，webpack 和 Node.js 等现代工具构建网站。通过 npm 进行热重载并访问任何软件包，并使用自动前缀在您喜欢的预处理器（如 Sass 或 Less）中编写 CSS

- Gridsome 使开发人员可以轻松构建默认情况下快速生成的静态生成的网站和应用程序

- Gridsome 允许在内容里面引用任何 CMS 或数据源。
  从 WordPress，Contentful 或任何其他无头 CMS 或 API 中提取数据，并在组件和页面中使用 GraphQL 访问它。

  ![image-20210329085030285](C:\Users\xiang wang\AppData\Roaming\Typora\typora-user-images\image-20210329085030285.png)

##### 工作方式

- Gridsome 生成静态 HTML，一旦加载到浏览器中，该 HTML 就会渗入 Vue SPA。这意味着您可以使用 Gridsome 构建静态网站和动态应用程序。
- Gridsome 为每个页面构建一个.html 文件和一个.json 文件。加载第一页后，它仅使用.json 文件来预取和加载下一页的数据。它还为需要它的每个页面构建一个.js 包（代码拆分）。
- 它使用 vue-router 进行 SPA 路由，并使用 vue-meta 来管理<head>。
- Gridsome 默认添加最小 57kB 的 gzip JS 捆绑包大小（vue.js，vue-router，vue-meta 和一些用于图像延迟加载的文件）。
- [详细了解其工作原理](https://gridsome.org/docs/how-it-works/）

##### 使用场景

- 不适合管理系统
- 简单页面展示
- 想要有更好的 SEO
- 想要有更好的渲染性能

##### 备选方案

- [VuePress](https://vuepress.vuejs.org/)
- [Nuxt](https://nuxtjs.org/)
- [Gatsby.js](https://www.gatsbyjs.org/)

##### 使用步骤

[官网 how-to-install](https://gridsome.org/docs/#how-to-install)

- 安装 GridSome CLI

  ```bash
  # 使用 yarn
  yarn global add @gridsome/cli

  # 使用 npm
  npm install --global @gridsome/cli

  # 查看是否安装成功
  gridsome --version
  ```

  需要配置 node-gyp 编译环境

  [node-gyp](https://www.jianshu.com/p/07a1473ff7fc)用于扩展 nodeJs 中的 C++扩展包，需要安装 python 环境

- 创建 GridSome 项目

  ```bash
  # 创建项目
  gridsome create my-gridsome-site

  # 进入项目中
  cd my-gridsome-site

  # 启动开发模式，或 npm run develop
  gridsome develop
  ```

- 目录结构

  ```bash
  .
  ├── src
  │   ├── components # 公共组件
  │   ├── layouts # 布局组件
  │   ├── pages # 页面路由组件
  │   ├── templates # 模板文件
  │   ├── favicon.png # 网站图标
  │   └── main.js # 应用入口
  ├── static # 静态资源存储目录，该目录中的资源不做构建处理
  ├── README.md
  ├── gridsome.config.js # 应用配置文件
  ├── gridsome.server.js # 针对服务端的配置文件
  ├── package-lock.json
  └── package.json
  ```

##### 核心概念

- 预渲染

  使用 build 打包构建生成 dist 目录，目录下的 index.html 都是预渲染页面

- [Pages](https://gridsome.org/docs/pages/)

  通过在 src/pages 文件夹中添加 Vue 组件来创建页面。他们使用基于文件的路由系统。例如，src / pages / About.vue 将是 mywebsite.com/about/。页面用于简单页面和列出集合的页面（例如/ blog /）。

- Collections

  如果您要在网站上放置博客文章，标签，产品等，则收藏很有用。可以使用 [Source 插件](https://gridsome.org/plugins)或 [Data Store API](https://gridsome.org/docs/data-store-api/) 从任何 Headless CMS，内容 API 或 Markdown 文件中获取集合。

  ![img](file://F:\大前端\第三部分\03-04-study-materials\handouts\3-4-2\assets\node-pages.0eae6d2.8581c59dbb258143a7ffcebb617ec5dc.png?lastModify=1617786545)

  集合存储在临时的本地 GraphQL 数据层中，可以在任何地方查询，过滤，分页或有关系。

- [Templates](https://gridsome.org/docs/templates/)

  板负责显示集合的节点（单个页面）。模板通常位于 src/templates 中。如果未在模板配置中指定组件，则 Gridsome 尝试查找与集合名称相同的文件。

  如：Post.vue

  ```vue
  <!-- src/templates/Post.vue -->
  <template>
    <Layout>
      <h1 v-html="$page.post.title" />
    </Layout>
  </template>

  <page-query>
  query ($id: ID!) {
    post(id: $id) {
      title
    }
  }
  </page-query>
  ```

- [Layouts](https://gridsome.org/docs/layouts/)

  布局是在页面和模板内部用于包装内容的 Vue 组件。布局通常包含页眉和页脚。

  页面中通常按以下方式使用布局：

  ```vue
  <template>
    <Layout>
      <h1>About us</h1>
    </Layout>
  </template>

  <script>
  import Layout from '~/layouts/Default.vue'

  export default {
    components: {
      Layout,
    },
  }
  </script>
  ```

- [Images](https://gridsome.org/docs/images/)

  Gridsome 具有内置的 `<g-image>` 组件，可输出优化的逐行图像。如果更改宽度和高度，则在开发时还可以实时调整大小和裁剪。 `<g-images>` 创建一个超小型模糊的嵌入式 base64 图像，然后在视图中使用 IntersectionObserver 延迟加载图像。

- [Linking](https://gridsome.org/docs/linking/)

  Gridsome 具有内置的 `<g-link>` 组件，该组件在查看链接时使用 IntersectionObserver 来预取链接的页面。这使得在 Gridsome 站点中浏览非常快，因为单击的页面已经下载。

##### 部署

https://gridsome.org/docs/deployment/

##### 项目配置

Gridsome 需要 gridsome.config.js 才能工作。插件和项目设置位于此处。基本配置文件如下所示：

```js
module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://www.gridsome.org',
  plugins: [],
}
```

更多配置查看[Project configuration](https://gridsome.org/docs/config/)

##### Pages 页面

页面负责在 URL 上显示您的数据。每个页面将静态生成，并具有自己的带有标记的 index.html 文件。

在 Gridsome 中创建页面有两种选择：

- 单文件组件

  `src/pages` 目录中的单文件组件将自动具有其自己的 URL。文件路径用于生成 URL，以下是一些基本示例：

  - `src/pages/Index.vue` becomes `/`_(The frontpage)_
  - `src/pages/AboutUs.vue` becomes `/about-us/`
  - `src/pages/about/Vision.vue` becomes `/about/vision/`
  - `src/pages/blog/Index.vue` becomes `/blog/`
  - `src/pages/user/[id].vue` becomes `/user/:id`.
  - `src/pages/user/[id]/settings.vue` becomes `/user/:id/settings`.

- 使用 Pages API 以编程方式创建页面

  ```js
  // gridsome.server.js
  module.exports = function(api) {
    api.createPages(({ createPage }) => {
      createPage({
        path: '/my-page',
        component: './src/templates/MyPage.vue',
      })
    })
  }
  ```

##### 页面 meta 信息

Gridsome 使用 [vue-meta](https://vue-meta.nuxtjs.org/) 处理有关页面的元信息。

```vue
<template>
  <div>
    <h1>Hello, world!</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
    meta: [{ name: 'author', content: 'John Doe' }],
  },
}
</script>
```

### 添加集合

集合可以通过 [source plugins](https://gridsome.org/plugins/) 添加，也可以使用 [Data Store API](https://gridsome.org/docs/data-store-api/) 自己添加。

在开发和构建期间，这些集合存储在本地内存数据存储中。节点可以来自本地文件（Markdown，JSON，YAML 等）或任何外部 API。

![Collections](F:\大前端\第三部分\03-04-study-materials\handouts\3-4-2\assets\node-pages.0eae6d2.8581c59dbb258143a7ffcebb617ec5dc-7030007.png)

已知有一个业务接口，使用[jsonplaceholder 模拟接口](http://jsonplaceholder.typicode.com/)创建，将数组或列表展示在页面上

1. 通过 Post1 放入 created 生命周期，不是服务端静态生成，而是有客户端动态请求到的数据

2. 所以需要使用集合，集合两个作用

   - 承载数据
   - GridSome 会将集合中的节点（模板）预渲染成页面

3. 在页面中查询 GraphQL

   - 添加数据源

     ```js
     // gridsome.server.js
     api.loadSource(async ({ addCollection }) => {
       const posts = addCollection('Post')

       // 想要预渲染的数据在这里加载
       const { data } = await axios.get(
         'https://jsonplaceholder.typicode.com/posts'
       )

       for (const item of data) {
         posts.addNode({
           id: item.id,
           title: item.title,
           content: item.body,
         })
       }
     })
     ```

   - 获取数据

     使用 GraphQL 查询数据，http://localhost:8080/___explore对应数据集，使用以下语句查询集合

     ```sql
     query {
     	post (id: 1){
             id
             title
             content
       }
     }
     ```

   - 在代码中使用数据预渲染页面

     page 或 template 中`使用<page-query>`，其他页面使用`<static-query>`

     GridSome 会将查询到的数据放在\$page.xx.xx 中，访问

4. 使用模板渲染节点页面

   templates 专门用来渲染节点，默认在`templates/{Collection}.vue`找集合名称.vue 作为节点模板

   - 创建 templates/Post.vue

   - 在 g 配置

     ```js
     module.exports = {
       siteName: '拉勾教育', // 网页名称
       siteDescription: '大前端', // 对应meta标签
       plugins: [],
       templates: {
         Post: [
           {
             path: '/posts/:id', // 对应gridsome.server中查询到的节点唯一键
             component: './src/templates/Post.vue',
           },
         ],
       },
     }
     ```

   - 在模板中拿到对应数据进行展示

     ```html
     <page-query>
       <! -- 会将传递过来的id作为这里的参数 -->
       query ($id: ID!) { post (id: $id){ id title content } }
     </page-query>
     ```

     设置 metaInfo

     ```js
     metaInfo () {
         return {
             title: this.$page.post.title
         }
     }
     ```

   - 通过 build 打包之后，serve 启动服务，可以看到生成的页面都是静态的（页面刷新时是服务端渲染，路由跳转是客户端渲染）

     ![image-20210331084458678](C:\Users\xiang wang\AppData\Roaming\Typora\typora-user-images\image-20210331084458678.png)

##### 使用 [Data Store API ](https://gridsome.org/docs/data-store-api/)添加集合

您可以从任何外部 API 手动添加集合。

本示例创建一个名为 Post 的集合，该集合从 API 获取内容并将结果作为节点添加到该集合中。

```js
// gridsome.server.js
const axios = require('axios')

module.exports = function(api) {
  api.loadSource(async (actions) => {
    const collection = actions.addCollection('Post')

    const { data } = await axios.get('https://api.example.com/posts')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.content,
      })
    }
  })
}
```

##### 处理数据

每个 Gridsome 项目都有一个 GraphQL 资源管理器，可以在开发模式下使用它来探索和测试查询。

在这里，您还将获得所有可用 GraphQL 集合的列表。

通常可以通过转到 `http://localhost:8080/___explore` 来打开它。

![image-20210407174924747](C:\Users\xiang wang\AppData\Roaming\Typora\typora-user-images\image-20210407174924747.png)

##### 查询数据

- 在 Pages 和 Templates 中使用 `<page-query>`
- 在 Components 中使用 `<static-query>`

[项目地址](https://github.com/wang1xiang/my-gridsome-site)
