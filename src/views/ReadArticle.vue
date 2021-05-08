<template>
  <div class="read-box">
    <div id="nav">
      <!-- 顶部公共组件 -->
      <Top></Top>
    </div>
    <div class="center-box">
      <!-- 阅读文章 -->
      <div class="backMain" @click="goback">返回首页>></div>
      <span class="backMain myArticle" @click="myArticle">我的文章>></span>
      <div class="read-page">
        <div class="article-content">
          <!-- 文章标题 -->
          <div class="article-title">{{ article.Title }}</div>
          <!-- 文章tip -->
          <div class="article-tip">
            <span>浏览量：{{ article.Hits }}</span>
            <span>作者：{{ article.UserLogin }}</span>
            <span>发布时间：{{ article.CreateAt }}</span>
            <div class="collection">
              {{ collectNum }}人收藏
              <img
                :src="
                  flag1 === true
                    ? require('../assets/img/star2.png')
                    : require('../assets/img/star3.png')
                "
                alt=""
                @click="collect"
              />
            </div>
          </div>
          <!-- 简介 -->
          <div class="introduction">
            <div class="introduction-text">{{ article.Content }}</div>
          </div>

          <!-- 点赞 -->
          <div class="like">
            <div class="likeText">{{ likeNum }}人点赞</div>
            <img
              :src="
                flag2 === true
                  ? require('../assets/img/like.png')
                  : require('../assets/img/like2.png')
              "
              alt=""
              @click="like"
            />
          </div>
          <!-- 回复 -->
          <div class="replyBox">
            <span>{{ replyMsg.length }} 条评论</span>
            <div class="reply" v-for="(item, index) in replyMsg" :key="index">
              <img :src="item.Src" alt="" />
              <div class="userInfo">
                <span class="userName">{{ item.UserID }}</span>
                <span class="replyTime">{{ item.CreateAt }}</span>
                <el-button
                  class="replyBtn"
                  type="primary"
                  icon="el-icon-edit"
                  @click="scroll(item)"
                  circle
                ></el-button>
                <el-button
                  class="deleteBtn"
                  type="danger"
                  icon="el-icon-delete"
                  @click="deleteReply(item.CommentID)"
                  circle
                ></el-button>
                <div class="repltContent">{{ item.Content }}</div>

                <!-- 二级回复 -->
                <div
                  class="reback"
                  v-for="(reply, index2) in item.Replies"
                  :key="index2"
                >
                  <div class="rebackTitle">回复：</div>
                  <img :src="reply.Src" alt="" />
                  <div class="userInfo">
                    <span class="userName">{{ reply.UserID }}</span>
                    <span class="replyTime">{{ reply.CreateAt }}</span>
                    <el-button
                      class="deleteBtnSecond"
                      type="danger"
                      icon="el-icon-delete"
                      @click="deleteReply(reply.CommentID)"
                      circle
                    ></el-button>
                    <div class="repltContent">{{ reply.Content }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 评论 -->
          <div class="addReply">
            <span>增加一条新回复 {{ replyTxt }}</span>
            <textarea id="replyBox" class="replyBox" ref="replyContent" />
            <div class="submit" @click="submit()">提交</div>
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
      article: {},
      articleId: "",
      likeNum: 1,
      collectNum: 1,
      flag1: true,
      flag2: true,
      // 一级评论
      replyMsg: [],
      // 二级评论（回复）
      rebackMsg: [],
      UserID: "",
      articleDetailInfo: {},
      currentReplyItem: undefined,
      replyTxt: "",
    };
  },
  methods: {
    // 返回主页
    goback() {
      this.$router.push("/");
    },
    // 我的文章
    myArticle() {
      this.myArticleId;
      this.$router.push({
        name: "person",
        params: {
          myArticleId: this.myArticleId,
        },
      });
    },
    // 收藏
    collect() {
      let that = this;
      that.collectNum = that.article.Favorities.length + 1;
      that.flag1 = !that.flag1;
      // 收藏
      if (!that.flag1) {
        that.$http
          .post(`/article/like/${that.articleId}`, {
            LikeType: "F",
          })
          .then((res) => {
          })
          .catch((e) => e);
      }
      // 取消
      if (that.flag1) {
        that.collectNum = that.collectNum - 1;
        that.$http
          .delete(`/article/like/${that.articleId}/F`)
          .then((res) => {
          })
          .catch((e) => e);
      }
    },
    // 点赞
    like() {
      let that = this;
      that.likeNum = that.article.Stars.length + 1;
      that.flag2 = !that.flag2;
      // 点赞
      if (!that.flag2) {
        that.$http
          .post(`/article/like/${that.articleId}`, {
            LikeType: "S",
          })
          .then((res) => {
          })
          .catch((e) => e);
      }
      // 取消
      if (that.flag2) {
        that.likeNum = that.likeNum - 1;
        that.$http
          .delete(`/article/like/${that.articleId}/S`)
          .then((res) => {
          })
          .catch((e) => e);
      }
    },
    // 删除评论
    deleteReply(commentID) {
      let that = this;
      that.$http
        .delete(`/article/comment/${commentID}`)
        .then((res) => {
          alert("success");
        })
        .catch((e) => e);
    },
    scroll(commentItem) {
      // 页面滚动到评论栏
      this.replyTxt = `回复: ${commentItem.UserID}`;
      this.currentReplyItem = commentItem;
      window.location.hash = "replyBox";
    },
    // 提交评论
    submit() {
      let that = this;
      let txt = "刚刚";
      let replyToID;
      if (that.currentReplyItem == undefined) {
        replyToID = that.articleId;
      } else {
        txt = `刚刚     回复于:${that.currentReplyItem.UserID}`;
        replyToID = that.currentReplyItem.CommentID;
      }
      that.$http
        .post(`/article/comment/${that.articleId}`, {
          ReplyTo: replyToID,
          Content: that.$refs.replyContent.value,
        })
        .then((res) => {
          alert("success");
          that.$set(that.replyMsg, that.replyMsg.length, {
            Content: that.$refs.replyContent.value,
            UserID: that.UserID,
            CreateAt: txt,
          });
          that.$refs.replyContent.value = "";
          that.currentReplyItem == undefined;
          that.replyTxt = "";
        })
        .catch((e) => e);
    },
    circuit(ReplyItems){
      if(ReplyItems){
        ReplyItems.forEach((item)=>{
          item.Src = `https://avatars1.githubusercontent.com/u/${item.UserID}?v=4`;
          // 递归
          this.circuit(ReplyItems.Replies);
        })
      }
    }
  },
  created() {
    let that = this;
    that.$http
      .get(`/article/${that.$route.params.articleID}`)
      .then((res) => {
        that.articleDetailInfo = res.data.Result;
        // 用户
        let articleDetail = that.articleDetailInfo;
        that.article = articleDetail;
        that.replyMsg = articleDetail.Comments || [];
        that.replyMsg.forEach((item) => {
          // this.rebackMsg = item.Replies;
          item.Src = `https://avatars1.githubusercontent.com/u/${item.UserID}?v=4`;
          that.circuit(item.Replies);
        });
        that.articleId = articleDetail.ArticleID;
        that.likeNum = that.article.Stars.length;
        that.collectNum = that.article.Favorities.length;
      })
      .catch((e) => e);
    that.$http
      .get("/user")
      .then((res) => {
        that.UserID = res.data.UserID;
      })
      .catch((e) => e);
  },
};
</script>

<style lang="scss" scoped>
.read-box {
  position: relative;
  background: #eee;
  .center-box {
    min-height: 3000px;
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
    .myArticle {
      position: relative;
      left: 160px;
      top: -20px;
    }
  }
  .bottom {
    width: 100%;
    position: absolute;
    top: 3000px;
    left: 0;
  }
}
.read-page {
  width: calc(100% - 490px);
  background: #fff;
  border: 2px solid #ccc;
  min-height: 2700px;
  position: absolute;
  top: 40px;
  left: 55px;

  .article-title {
    text-align: center;
    margin: 30px 0;
    font-size: 24px;
    font-weight: bold;
    color: #555;
  }
  .article-tip {
    display: flex;
    justify-content: space-around;

    .collection {
      margin-top: -12px;
      img {
        width: 28px;
        height: 28px;
        position: relative;
        top: 8px;
        left: 6px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .introduction,
  .principle {
    margin: 40px 0 0 120px;

    .introduction-title,
    .principle-title {
      font-size: 36px;
      color: #555;
    }

    .introduction-text {
      margin: 10px 60px 0 -60px;
      padding: 15px;
      font-size: 17px;
      color: #444;
      border: 1px solid #666;
      line-height: 28px;
      text-indent: 30px;
    }
  }

  .like {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 200px);
    margin: 40px 60px;
    padding: 0 40px;
    height: 70px;
    line-height: 70px;
    border: 1px solid #888;

    img {
      width: 46px;
      height: 46px;
      position: relative;
      top: 12px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .replyBox {
    width: calc(100% - 120px);
    min-height: 200px;
    margin: 0 60px;
    padding-top: 6px;
    border: 1px solid #888;

    .rebackTitle {
      margin-bottom: 10px;
    }
    .reback {
      margin: 20px 20px 20px 40px;
    }

    span {
      margin-left: 20px;
    }

    .reply {
      display: flex;
      margin: 26px 20px;
      img {
        width: 40px;
        height: 40px;
      }
      .repltContent {
        margin: 4px 0 0 20px;
      }
    }
  }

  .addReply {
    margin-top: 30px;
    position: relative;

    .replyBox {
      width: calc(100% - 148px);
      height: 200px;
      resize: none;
      font-size: 16px;
      color: #333;
      padding: 14px;
    }

    span {
      margin-left: 60px;
    }

    .submit {
      color: #fff;
      width: 80px;
      height: 36px;
      background: #333;
      line-height: 36px;
      text-align: center;
      position: absolute;
      right: 58px;
      top: 258px;

      &:hover {
        background: #555;
        cursor: pointer;
      }
    }
  }
}
/deep/ .deleteBtn {
  width: 40px;
  height: 40px;
  position: relative;
  left: 1000px;
}
/deep/ .deleteBtnSecond {
  width: 40px;
  height: 40px;
  position: relative;
  left: 1000px;
}

/deep/ .replyBtn {
  width: 40px;
  height: 40px;
  position: relative;
  left: 980px;
}
</style>