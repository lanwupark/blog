<template>
  <!-- 右侧用户功能框 -->
  <div class="person-msg">
    <div class="person-top">
      <img class="personInfo-icon" :src="userInfo.AvatarURL" alt="" />
      <div class="person-info">
        <p class="info-name">{{ userInfo.UserLogin }}</p>
        <p class="info-sign">{{ userInfo.UserID }}</p>
      </div>
    </div>
    <div class="person-func">
      <router-link to="/album" class="btn-detail">新建相册</router-link>
      <router-link to="/write" class="btn-detail">撰写文章</router-link>
      <router-link to="/collection" class="btn-detail">我的收藏</router-link>
      <router-link to="/person" class="btn-detail">个人信息</router-link>
      <router-link to="/myAlbum" class="btn-detail">我的相册</router-link>
      <router-link to="/admin" v-if="userInfo.IsAdmin" class="btn-detail"
        >后台管理</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
    };
  },

  created() {
    // 请求
    let that = this;
    that.$http
      .get("/user")
      .then((res) => {
        that.userInfo = res.data;
        that.userInfo.AvatarURL = `https://avatars1.githubusercontent.com/u/${that.userInfo.UserID}?v=4`;
      })
      .catch((e) => e);
  },
};
</script>

<style lang="scss" scoped>
.person-msg {
  // margin-top: 0;
  width: 320px;
  height: 414px;
  background: #fff;
  border: 2px solid #ccc;
}
.person-top,
.person-func {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 34px;
}

.person-top img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.person-info {
  position: relative;
  top: 24px;
  right: 24px;
}
.info-name {
  font-size: 18px;
  font-weight: bold;
}
.info-sign {
  margin-top: 30px;
}
.person-func {
  padding-top: 10px;
}
.btn-detail {
  width: 60px;
  text-align: center;
  padding: 8px 14px;
  margin: 40px 18px 0 10px;
  border: 1px solid #ccc;
  color: #444;
  font-size: 14px;
  text-decoration: none;
}
.btn-detail:hover {
  background: rgb(226, 224, 224);
}
</style>