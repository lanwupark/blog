import Vue from 'vue'
import VueRouter from 'vue-router'

// import App from "../App.vue"
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: "/oauth/token", // 登陆成功
    component:()=>import ("@/views/LoginTip.vue")
  },
  {
    path: "/", // 主页
    component:()=>import ("@/views/Main.vue")
  },
  {
    name: 'read',
    path: "/read/:articleID", // 阅读博客
    component:()=>import ("@/views/ReadArticle.vue")
  },
  {
    path: "/write", // 撰写|编辑博客
    component:()=>import ("@/views/WriteArticle.vue")
  },
  {
    name: 'person',
    path: "/person/:personID", // 个人信息
    component:()=>import ("@/views/Person.vue")
  },
  {
    path: "/collection", // 收藏夹
    component:()=>import ("@/views/Collection.vue")
  },
  {
    path: "/album/:albumID", // 相册
    component:()=>import ("@/views/Album.vue")
  },
  {
    path: "/myAlbum", // 相册
    component:()=>import ("@/views/myAlbum.vue")
  },
  {
    path: "/feedBack", // 反馈
    component:()=>import ("@/views/FeedBack.vue")
  },
  {
    name: 'articleList',
    path: "/articleList", // 文章查询列表
    component:()=>import ("@/views/ArticleList.vue")
  },
  {
    path: "/admin", // 管理员
    component:()=>import ("@/views/Administrator.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
