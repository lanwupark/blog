<template>
  <div id="app">
    <div id="nav">
      <!-- 顶部公共组件 -->
      <!-- <Top></Top> -->
    </div>
    <!-- 中部路由 -->
    <div class="middle">
      <router-view />
      <!-- 头侧用户和好友列表 -->
      <!-- <div id="right">
        <Person></Person>
        <Friends></Friends>
      </div> -->
    </div>
    <!-- 底部公共组件 -->
    <div id="bottom">
        <Bottom></Bottom>
    </div>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
// import Bottom from "@/components/Bottom.vue";
// import Person from "@/components/Person.vue";
// import Friends from "@/components/Friends.vue";
export default {
  components: {
    Top,
    // Bottom,s
    // Person,
    // Friends,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #333;
}

#app {
  background: #eee;
}


</style>
