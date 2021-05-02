import Vue from "vue"
import Vuex from "vuex"
import moduleyr from "./moduleyr.js"
Vue.use(Vuex)


var store = new Vuex.Store({
	modules:{
		yr:moduleyr,
	}
})

export default store