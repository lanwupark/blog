import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store' //全局引入 vueX
import Axios from 'axios' //全局引入 axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //ui框架的引入

//引入vuex
import Vuex from "vuex"
Vue.use(Vuex)
//创建仓库
// const store=new Vuex.Store({
//   //msg是input搜索框下拉框的现实和隐藏时，类名的切换
//   //sanjixin是导航栏点击时的样式变化
//   // state:{msg:"pull_down_none",}
//   state:{msg:"pull_down_none",
//          search:""
//           }

// })
Vue.prototype.$http = Axios
Axios.defaults.baseURL = 'http://139.198.187.220:8080'
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset="UTF-8"'


Axios.interceptors.request.use(
  config => {
      // 自定义header信息（比如token）
      // console.log("请求拦截器添加userId-----------",sessionStorage.userId)
      if(!config.headers['Authorization']){
          config.headers['Authorization'] = localStorage.getItem("Token");
      }
      // console.log(config)
      return config;
  }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  config => {
      if(config.headers['Set-Token']){
          window.localStorage.setItem('Token',config.headers['Set-Token']);
      }
      return config;
  }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
  }                       
);
// Axios.defaults.baseURL = "http://192.168.43.62:7001"
Axios.defaults.withCredentials = true;

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios

Vue.use(ElementUI); //ui的注入
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')