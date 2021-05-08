<template>
  <!-- 主页 -->
  <div class="main-box">
    <div id="nav">
      <!-- 顶部公共组件 -->
      <Top></Top>
    </div>
    <div class="center-box">
      <div class="main-page">
        <div></div>
        <el-scrollbar style="height: 100%">
          <el-tabs
            class="main-nav"
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane
              v-for="(category, categoryIdx) in categories"
              :key="'A'+categoryIdx"
              :label="category"
              :name="category"
              class="nav-item"
            >
            </el-tab-pane>
            <div
              class="msg-item" @click="articleDetail(item.ArticleID)"
              v-for="(item, index1) in articleMaintains"
              :key="'B'+index1"
            >
              <!-- 标题、信息数量 -->
              <div class="item-top">
                <div class="msg-title"   >{{ item.Title }}</div>
                <div class="comment">
                  <img src="../assets/img/msg2.png" alt="" />
                  {{ item.CommentNumber }}
                </div>
              </div>
              <!-- 网站、tip、时间、回复人 -->
              <div class="item-bottom">
                <div class="msg-ldetail">
                  <span
                    v-for="(classItem, index2) in item.Categories"
                    :key="'C'+index2"
                    >{{ classItem }}</span
                  >
                </div>
                <div class="msg-rdetail">
                  <span>{{ item.LastEditDateString }}</span>
                  <span>最后回复于:</span>
                  <span>{{ item.LastEditUserLogin }}</span>
                </div>
              </div>
            </div>
            <!-- 最热页面 -->
          </el-tabs>
        </el-scrollbar>
      </div>

      <!-- 头侧用户和好友列表 -->
      <div class="right" v-show="logined">
        <Person></Person>
        <!-- <Friends></Friends> -->
      </div>
    </div>
    <!-- 底部公共组件 -->
    <div class="bottom" v-show="logined">
      <Bottom></Bottom>
    </div>
  </div>
</template>

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
    const mostHot = "最热";
    return {
        defaultPageSize:10,
      mostHot: mostHot,
      logined: false,
      activeName: mostHot,
      categories: [mostHot],
      articleMaintains: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.name;
      this.queryArticle(this.activeName);
    },
    queryArticle(categoryName) {
      if (categoryName == this.mostHot || categoryName == undefined) {
        categoryName = "";
      }
      this.$http
    //   默认defaultPageSize条
        .get(`/article/query?category_name=${categoryName}&page_size=${this.defaultPageSize}`)
        .then((res) => {
          this.articleMaintains = res.data.ResultList;
        })
        .catch((e) => e);
    },
    articleDetail(param) {
      // 请求文章详情,
      this.$router.push({path: `/read/${param}`})
    },
  },
  created() {
    // 登录成功显示完整页面
    let that = this;
    that.$http
      .get("/user")
      .then((res) => {
        console.log(res, 1111);
        that.logined = true;
      })
      .catch((e) => e);

    that.$http
      .get("/article/categories")
      .then((res) => {
        for (const i in res.data.ResultList) {
          that.categories.push(res.data.ResultList[i]);
        }
      })
      .catch((e) => e);
    //   查询热门文章
    that.queryArticle();
  },
};
</script>

<style lang="scss" scoped>
body .el-scrollbar__wrap {
  overflow-x: hidden;
}
.main-box {
  position: relative;
  background: #eee;
  .center-box {
    height: 1010px;
    position: relative;

    .right {
      position: absolute;
      right: 40px;
    }
  }

  .bottom {
    width: 100%;
    position: absolute;
    top: 910px;
    left: 0;
  }
}

.main-page {
  width: calc(100% - 490px);
  height: 750px;
  background: #fff;
  border: 2px solid #ccc;
  position: absolute;
  top: 40px;
  left: 55px;

  .main-nav {
    padding: 18px;
  }
}
/* 每一条信息 */
.msg-item {
  height: 80px;
  margin-left: 18px;
  border-bottom: 2px solid rgb(228, 225, 225);

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    border: none;
  }

  .item-top,
  .item-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .item-top {
    .comment {
      margin-right: 50px;
    }
    .comment img {
      width: 20px;
      height: 20px;
      position: relative;
      top: 4px;
    }
  }
  .item-bottom {
    margin-right: 800px;
    .msg-ldetail,
    .msg-rdetail span {
      margin-right: 40px;
    }
    .msg-ldetail span {
      margin-right: 40px;
    }
  }
}
.person-msg {
  position: relative;
  top: 40px;
}
/deep/ .el-tabs__item {
  padding: 0 40px;
}

/deep/ .el-tabs__header {
  margin: 0 20px 15px;
}
</style>