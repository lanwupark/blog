<template>
  <div class="album-box">
    <div id="nav">
      <!-- 顶部公共组件 -->
      <Top></Top>
    </div>
    <div class="center-box">
      <!-- 相册 -->
      <div class="backMain" @click="goback">返回首页>></div>
      <span class="backMain createAlbum" @click="createAlbum">创建相册>></span>
      <div class="album-page">
        <div class="album-content">
          <div class="album-title">我的相册</div>
          <!-- 相册列表 -->
          <div class="picList">
            <div
              v-for="(item, index1) in albumInfo"
              :key="index1"
              class="picItem"
            >
              <img
                class="albumInfo"
                :src="getImageURL(item.CoverName)"
                @click="albumDetail(item.AlbumID)"
              />
              <!-- <div>相册名</div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- 头侧用户和好友列表 -->
      <div class="right">
        <Person></Person>
        <!-- <Friends></Friends> -->
      </div>
    </div>
    <!-- 底部公共组件 -->
    <div class="bottom">
      <Bottom></Bottom>
    </div>
  </div>
</template>
<script type="text/javascript" src=""></script>
<script>
import Top from "@/components/Top.vue";
import Person from "@/components/Person.vue";
import Friends from "@/components/Friends.vue";
import Bottom from "@/components/Bottom.vue";
export default {
  components: {
    Person,
    Friends,
    Bottom,
    Top,
  },
  data() {
    return {
      albumInfo: [],
      albumHead: "http://139.198.187.220:8080/images/",
      // albumPic: [],
    };
  },
  methods: {
    // 返回主页
    goback() {
      this.$router.push("/");
    },
    createAlbum() {
      this.$router.push("/album");
    },
    getImageURL(item) {
      return `${this.albumHead}/${item}`;
    },
    albumDetail(albumID) {
      // 请求
      let that = this;
      that.$router.push({ path: `/album/detail/${albumID}` });
    },
  },
  created() {
    let that = this;
    // 用户
    let userID = "";
    that.$http
      .get("/user")
      .then((res) => {
        console.log(res.data, 4);
        userID = res.data.UserID;
        // 相册
        that.$http
          .get(`/album/${userID}`)
          .then((res) => {
            console.log(res, 6398);
            that.albumInfo = res.data.ResultList;
          })
          .catch((e) => e);
      })
      .catch((e) => e);
  },
};
</script>

<style lang="scss" scoped>
.album-box {
  position: relative;
  background: #eee;
  .center-box {
    min-height: 1080px;
    position: relative;

    .right {
      position: absolute;
      right: 40px;
    }

    .backMain {
      position: relative;
      left: 60px;
      margin-top: 20px;
      font-size: 14px;
      color: #666;
      cursor: pointer;

      &:hover {
        color: #444;
      }
    }
    .createAlbum {
      position: relative;
      left: 160px;
      top: -20px;
    }
  }
  .bottom {
    width: 100%;
    position: absolute;
    top: 1180px;
    left: 0;
  }
}
.album-page {
  width: calc(100% - 490px);
  background: #fff;
  border: 2px solid #ccc;
  min-height: 980px;
  position: absolute;
  top: 40px;
  left: 55px;

  .album-title {
    text-align: center;
    margin: 30px 0;
    font-size: 24px;
    font-weight: bold;
    color: #555;

    input {
      font-size: 18px;
      width: 150px;
      height: 50px;
      border: none;
      border-bottom: 1px solid #bbb;
    }
  }

  .albumInfo {
    width: 200px;
    height: 200px;
  }

  .picList {
    width: 1700px;
    display: flex;
    flex-wrap: wrap;
  }

  .albumInfo {
    margin: 20px 30px 0 39px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>