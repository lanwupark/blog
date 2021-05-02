import Vue from 'vue'
import VueRouter from 'vue-router'

// import App from "../App.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/oauth/token", // 主页
    component:()=>import ("@/views/Main.vue")
  },
  {
    path: "/", // 主页
    component:()=>import ("@/views/Main.vue")
  },
  {
    path: "/read", // 阅读博客
    component:()=>import ("@/views/ReadArticle.vue")
  },
  {
    path: "/write", // 撰写|编辑博客
    component:()=>import ("@/views/WriteArticle.vue")
  },
  {
    path: "/person", // 个人信息
    component:()=>import ("@/views/Person.vue")
  },
  {
    path: "/collection", // 收藏夹
    component:()=>import ("@/views/Collection.vue")
  },
  {
    path: "/album", // 相册
    component:()=>import ("@/views/Album.vue")
  },
  {
    path: "/feedBack", // 反馈
    component:()=>import ("@/views/FeedBack.vue")
  },
  {
    path: "/album", // 文章查询列表
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