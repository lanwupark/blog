<template>
  <!-- 管理员 -->
  <div class="main-box">
    <div class="center-box">
      <div class="main-page">
        <el-tabs class="main-nav" v-model="activeName" @tab-click="handleClick">
          <!-- 文章审核 -->
          <el-tab-pane label="文章审核" name="first" class="nav-item">
            <div class="search-box">
              <div class="article-search">
                <span>文章ID</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="articleform.article_id"
                  clearable
                  class="articleId-input"
                >
                </el-input>
              </div>
              <div class="user-search">
                <span>用户名</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="articleform.user_login"
                  clearable
                  class="articleId-input"
                >
                </el-input>
              </div>
              <div class="time-search">
                <span style="margin-right: 10px">开始时间</span>
                <el-date-picker
                  v-model="articleform.date_from"
                  style="margin-right: 10px"
                  placeholder="选择开始日期"
                >
                </el-date-picker>
                <span style="margin-right: 10px">结束时间</span>
                <el-date-picker
                  v-model="articleform.date_to"
                  placeholder="选择结束日期"
                >
                </el-date-picker>
              </div>
              <el-button class="search-btn" @click="formsearch"
                >Search</el-button
              >
            </div>
            <div class="content-list">
              <el-table
                :data="tableData"
                height="400"
                border
                @row-click="rowclick"
                style="width: 100%"
              >
                <el-table-column prop="ArticleID" label="文章ID" width="180">
                </el-table-column>
                <el-table-column prop="UserID" label="用户ID" width="180">
                </el-table-column>
                <el-table-column prop="CreateAt" label="创建人">
                </el-table-column>
                <el-table-column prop="Status" label="状态"> </el-table-column>
                <el-table-column prop="Title" label="标题"> </el-table-column>
                <el-table-column prop="UpdateAt" label="更新">
                </el-table-column>
                <el-table-column prop="UserLogin" label="用户名">
                </el-table-column>
                <el-table-column prop="action" label="Action">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      type="text"
                      @click="agree(scope.$index, scope.row)"
                      :disabled="scope.row.disabled"
                      >同意</el-button
                    >
                    <el-button
                      size="small"
                      type="text"
                      @click="block(scope.$index, scope.row)"
                      :disabled="scope.row.blockDisabled"
                      >拉黑</el-button
                    >
                    <el-button
                      size="small"
                      type="text"
                      @click="remove(scope.$index, scope.row)"
                      :disabled="scope.row.deleteDisabled"
                      >删除</el-button
                    >
                    <a
                      size="small"
                      class=""
                      type="text"
                      :href="getArticleHref(scope.row)"
                      target="__blank"
                      >文章详情</a
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="content-detail">{{ contentDetail }}</div>
          </el-tab-pane>
          <!-- 图片审核 -->
          <el-tab-pane label="图片审核" name="second" class="nav-item">
            <div class="search-box">
              <div class="article-search">
                <span>相册ID</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="photoform.album_id"
                  clearable
                  class="articleId-input"
                >
                </el-input>
              </div>
              <div class="user-search">
                <span>用户名</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="photoform.user_login"
                  clearable
                  class="articleId-input"
                >
                </el-input>
              </div>
              <div class="time-search">
                <div class="time-search">
                  <span style="margin-right: 1px">开始时间</span>
                  <el-date-picker
                    v-model="photoform.date_from"
                    type="date"
                    style="margin-right: 1px"
                    placeholder="选择开始日期"
                  >
                  </el-date-picker>
                  <span style="margin-right: 1px">结束时间</span>
                  <el-date-picker
                    v-model="photoform.date_to"
                    type="date"
                    placeholder="选择结束日期"
                  >
                  </el-date-picker>
                </div>
              </div>
              <el-button class="search-btn" @click="photoSearch"
                >Search</el-button
              >
            </div>
            <div class="content-list">
              <el-table
                :data="tableData1"
                height="400"
                border
                @row-click="rowclick"
                style="width: 100%"
              >
                <el-table-column prop="AlbumID" label="相册ID" width="180">
                </el-table-column>
                <el-table-column prop="AlbumName" label="相册名" width="180">
                </el-table-column>
                <el-table-column prop="UserID" label="用户ID">
                </el-table-column>
                <el-table-column prop="CreateAt" label="创建人">
                </el-table-column>
                <el-table-column prop="FileSize" label="文件大小">
                </el-table-column>
                <el-table-column prop="PhotoName" label="照片名">
                </el-table-column>
                <el-table-column prop="PhotoOriginalName" label="照片实际名">
                </el-table-column>
                <el-table-column prop="Status" label="状态"> </el-table-column>

                <el-table-column prop="UserLogin" label="用户名">
                </el-table-column>
                <el-table-column prop="action" label="Action">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      type="text"
                      @click="photoAgree(scope.$index, scope.row)"
                      :disabled="scope.row.disabled"
                      >同意</el-button
                    >
                    <el-button
                      size="small"
                      type="text"
                      @click="photoBlock(scope.$index, scope.row)"
                      :disabled="scope.row.blockDisabled"
                      >拉黑</el-button
                    >
                    <el-button
                      size="small"
                      type="text"
                      @click="photoRemove(scope.$index, scope.row)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="content-detail"><img :src="currentImgSrc" /></div>
          </el-tab-pane>
          <!-- 评论管理 -->
          <el-tab-pane label="评论管理" name="third" class="nav-item">
            <div class="search-box">
              <div class="article-search">
                <span>ArticleID</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="messageForm.article_id"
                  clearable
                  class="articleId-input"
                >
                </el-input>
              </div>
              <div class="user-search">
                <span>UserID</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="messageForm.page_size"
                  clearable
                  class="articleId-input"
                >
                </el-input>
              </div>
              <div class="time-search">
                <span style="margin-right: 10px">开始时间</span>
                <el-date-picker
                  v-model="messageForm.date_from"
                  style="margin-right: 10px"
                  placeholder="选择开始日期"
                >
                </el-date-picker>
                <span style="margin-right: 10px">结束时间</span>
                <el-date-picker
                  v-model="messageForm.date_to"
                  placeholder="选择结束日期"
                >
                </el-date-picker>
              </div>
              <el-button class="search-btn" @click="messageClick"
                >Search</el-button
              >
            </div>
            <div class="content-list">
              <el-table
                :data="tableData"
                height="400"
                border
                style="width: 100%"
              >
                <el-table-column prop="articleId" label="ArticleID" width="180">
                </el-table-column>
                <el-table-column prop="userId" label="UserID" width="180">
                </el-table-column>
                <el-table-column prop="title" label="Title"> </el-table-column>
                <el-table-column prop="lastEditDate" label="LastEditDate">
                </el-table-column>
                <el-table-column prop="status" label="Status">
                </el-table-column>
                <el-table-column prop="action" label="Action">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      type="text"
                      @click="commentAgree(scope.$index, scope.row)"
                      :disabled="scope.row.disabled"
                      >同意</el-button
                    >
                    <el-button
                      size="small"
                      type="text"
                      @click="commentBlock(scope.$index, scope.row)"
                      :disabled="scope.row.blockDisabled"
                      >拉黑</el-button
                    >
                    <el-button
                      size="small"
                      type="text"
                      @click="commentRemove(scope.$index, scope.row)"
                      >删除</el-button
                    >
                    <el-button
                      size="small"
                      type="text"
                      @click="commentDetail(scope.$index, scope.row)"
                      >文章详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="content-detail">{{ contentDetail }}</div>
          </el-tab-pane>
          <!-- 用户管理 -->
          <el-tab-pane label="用户管理" name="four" class="nav-item">
            <div class="search-box">
              <div class="article-search">
                <span>用户ID</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="userForm.user_id"
                  clearable
                  class="articleId-input"
                >
                </el-input>
              </div>
              <div class="user-search">
                <span>用户名</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="userForm.user_login"
                  clearable
                  class="articleId-input"
                >
                </el-input>
              </div>
              <div class="time-search">
                <span style="margin-right: 10px">开始时间</span>
                <el-date-picker
                  v-model="userForm.date_from"
                  style="margin-right: 10px"
                  placeholder="选择开始日期"
                >
                </el-date-picker>
                <span style="margin-right: 10px">结束时间</span>
                <el-date-picker
                  v-model="userForm.date_to"
                  placeholder="选择结束日期"
                >
                </el-date-picker>
              </div>
              <el-button class="search-btn" @click="userClick"
                >Search</el-button
              >
            </div>
            <div class="content-list">
              <el-table
                :data="tableData3"
                height="400"
                border
                style="width: 100%"
              >
                <el-table-column prop="UserID" label="用户ID">
                </el-table-column>
                <el-table-column prop="UserLogin" label="登录名">
                </el-table-column>
                <el-table-column prop="IsAdmin" label="是否管理员">
                </el-table-column>
                <el-table-column prop="Blog" label="博客" width="180">
                </el-table-column>
                <el-table-column prop="CreateAt" label="创建人" width="180">
                </el-table-column>
                <el-table-column prop="Email" label="邮箱"> </el-table-column>
                <el-table-column prop="Localtion" label="位置">
                </el-table-column>
                <el-table-column prop="Status" label="状态"> </el-table-column>
                <el-table-column prop="UpdateAt" label="更新时间">
                </el-table-column>
                <el-table-column prop="action" label="Action">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      type="text"
                      @click="userAgree(scope.$index, scope.row)"
                      :disabled="scope.row.disabled"
                      >同意</el-button
                    >
                    <el-button
                      size="small"
                      type="text"
                      @click="userBlock(scope.$index, scope.row)"
                      :disabled="scope.row.blockDisabled"
                      >拉黑</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="content-detail">{{ contentDetail }}</div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 底部公共组件 -->
    <div class="bottom">
      <Bottom></Bottom>
    </div>
  </div>
</template>

<script>
import Bottom from "@/components/Bottom.vue";
export default {
  components: {
    Bottom,
  },
  data() {
    var defaultDateFrom = new Date();
    defaultDateFrom.setMonth(0);
    defaultDateFrom.setDate(1);
    var defaultDateTo = new Date();
    defaultDateTo.setDate(defaultDateTo.getDate() + 1);
    return {
      dis: false,
      articleform: {
        article_id: "",
        user_login: "",
        date_from: defaultDateFrom,
        date_to: defaultDateTo,
      },

      photoform: {
        album_id: "",
        user_login: "",
        date_from: defaultDateFrom,
        date_to: defaultDateTo,
      },

      messageForm: {
        //    article_id:"",
        //    comment_id:"",
        //    date_from:"",
        //    date_to:""
      },
      userForm: {
        user_id: "",
        user_login: "",
        date_from: defaultDateFrom,
        date_to: defaultDateTo,
      },

      activeName: "first",
      articleIdInput: "",
      userIdInput: "",
      value1: "",
      tableData: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      statusKeyValue: {
        Y: "正常",
        B: "已拉黑",
        D: "已删除",
      },
      contentDetail: "",
      currentImgSrc: "https://www.sanxiau.edu.cn/images/LOGO.png",
      imgServerPrefix: "http://139.198.187.220:8080/images",
    };
  },
  methods: {
    handleClick(tab, event) {},
    rowclick(row, event, column) {
      if (row.Content) {
        this.contentDetail = row.Content;
      } else if (row.AlbumName) {
        this.currentImgSrc = `${this.imgServerPrefix}/${row.PhotoName}`;
      }
    },
    getArticleHref(item) {
      return `/read/${item.ArticleID}`;
    },
    //   文章审核
    async formsearch() {
      // 搜索
      let res = await this.$http.get("/admin/article", {
        params: this.articleform,
      });

      for (const i in res.data.ResultList) {
        //   设置状态中文
        res.data.ResultList[i].Status = this.statusKeyValue[
          res.data.ResultList[i].Status
        ];
        // 初始化状态
        res.data.ResultList[i].disabled = false;
        res.data.ResultList[i].blockDisabled = false;
        res.data.ResultList[i].deleteDisabled = false;
        // 禁用按钮
        if (res.data.ResultList[i].Status == this.statusKeyValue.Y) {
          res.data.ResultList[i].disabled = true;
        }
        if (res.data.ResultList[i].Status == this.statusKeyValue.B) {
          res.data.ResultList[i].blockDisabled = true;
        }
        if (res.data.ResultList[i].Status == this.statusKeyValue.D) {
          res.data.ResultList[i].deleteDisabled = true;
        }
      }
      this.tableData = res.data.ResultList;
    },
    async changeStatus(data) {
      await this.$http.put(`/admin/article/${data.article_id}/${data.status}`);
    },
    // 同意文章
    async agree(index, value) {
      await this.changeStatus({ article_id: value.ArticleID, status: "Y" });
      await this.formsearch();
    },
    // 拉黑文章
    async block(index, value) {
      await this.changeStatus({ article_id: value.ArticleID, status: "B" });
      await this.formsearch();
    },
    // 删除文章
    async remove(index, value) {
      await this.changeStatus({ article_id: value.ArticleID, status: "D" });
      await this.formsearch();
    },
    detail() {
      //   this.changeStatus({article_id:value.ArticleID,status:'正常'})
    },
    // 图片审核
    async photoSearch() {
      let res = await this.$http.get("/admin/photo", {
        params: this.photoform,
      });
      for (const i in res.data.ResultList) {
        //   设置状态中文
        res.data.ResultList[i].Status = this.statusKeyValue[
          res.data.ResultList[i].Status
        ];
        // 初始化状态
        res.data.ResultList[i].disabled = false;
        res.data.ResultList[i].blockDisabled = false;
        res.data.ResultList[i].deleteDisabled = false;
        // 禁用按钮
        if (res.data.ResultList[i].Status == this.statusKeyValue.Y) {
          res.data.ResultList[i].disabled = true;
        }
        if (res.data.ResultList[i].Status == this.statusKeyValue.B) {
          res.data.ResultList[i].blockDisabled = true;
        }
        if (res.data.ResultList[i].Status == this.statusKeyValue.D) {
          res.data.ResultList[i].deleteDisabled = true;
        }
      }
      this.tableData1 = res.data.ResultList;
    },
    async changePhotoStatus(data) {
      let res = await this.$http.put(
        "/admin/photo/" + data.photo_name + "/" + data.status
      );
    },
    async photoAgree(index, value) {
      await this.changePhotoStatus({
        photo_name: value.PhotoName,
        status: "Y",
      });
      await this.photoSearch();
    },
    async photoBlock(index, value) {
      await this.changePhotoStatus({
        photo_name: value.PhotoName,
        status: "B",
      });
      await this.photoSearch();
    },
    async photoRemove(index, value) {
      await this.changePhotoStatus({
        photo_name: value.PhotoName,
        status: "D",
      });
      await this.photoSearch();
    },

    // 评论管理
    async messageClick() {
      let res = await this.$http.get("/admin/comment", {
        params: this.messageForm,
      });
      for (const i in this.statusKeyValue) {
        for (const k in res.data.ResultList) {
          console.log(res.data.ResultList[k]);
          if (res.data.ResultList[k].Status == i) {
            res.data.ResultList[k].Status = this.statusKeyValue[i];
            console.log(res.data.ResultList[k].status);
          }
        }
      }
      for (const i in res.data.ResultList) {
        //    console.log(res.data.ResultList[i]);
        res.data.ResultList[i].disabled = false;
        res.data.ResultList[i].blockDisabled = false;
      }

      for (const i in res.data.ResultList) {
        if (res.data.ResultList[i].Status == "正常") {
          res.data.ResultList[i].disabled = true;
        } else if (res.data.ResultList[i].Status == "拉黑") {
          res.data.ResultList[i].blockDisabled = true;
        }
      }
      this.tableData2 = res.data.ResultList;
    },
    async changeCommentStatus() {
      let res = await this.$http.put(
        "/admin/comment/" + data.comment_id + "/" + data.status
      );
    },
    async commentAgree(index, value) {
      await this.changeCommentStatus({
        comment_id: value.CommentID,
        status: "Y",
      });
      await this.messageClick();
      value.disabled = true;
      value.blockDisabled = false;
    },
    async commentBlock() {
      value.blockDisabled = true;
      value.disabled = false;
      await this.changeCommentStatus({
        comment_id: value.CommentID,
        status: "B",
      });
      await this.messageClick();
    },
    async commentRemove() {
      await this.changeCommentStatus({
        comment_id: value.CommentID,
        status: "D",
      });
      await this.messageClick();
    },
    // 用户管理
    async userClick() {
      let res = await this.$http.get("/admin/user", {
        params: this.userForm,
      });
      for (const i in res.data.ResultList) {
        //   设置状态中文
        res.data.ResultList[i].Status = this.statusKeyValue[
          res.data.ResultList[i].Status
        ];
        // 初始化状态
        res.data.ResultList[i].disabled = false;
        res.data.ResultList[i].blockDisabled = false;
        res.data.ResultList[i].IsAdmin = res.data.ResultList[i].IsAdmin
          ? "是"
          : "否";
        // 禁用按钮
        if (res.data.ResultList[i].Status == this.statusKeyValue.Y) {
          res.data.ResultList[i].disabled = true;
        }
        if (res.data.ResultList[i].Status == this.statusKeyValue.B) {
          res.data.ResultList[i].blockDisabled = true;
        }
      }
      this.tableData3 = res.data.ResultList;
    },
    async updateUser(data) {
      let res = await this.$http.put(
        "/admin/user/" + data.user_id + "/" + data.status
      );
    },
    async userAgree(index, value) {
      await this.updateUser({ user_id: value.UserID, status: "Y" });
      await this.userClick();
    },
    async userBlock(index, value) {
      await this.updateUser({ user_id: value.UserID, status: "B" });
      await this.userClick();
    }
  },
};
</script>

<style lang="scss" scoped>
.main-box {
  position: relative;
  background: #eee;
  .center-box {
    height: 1000px;
    position: relative;

    .right {
      position: absolute;
      right: 40px;
    }
  }

  .bottom {
    width: 100%;
    position: absolute;
    top: 960px;
    left: 0;
  }
}

.main-page {
  width: calc(100% - 100px);
  min-height: 890px;
  background: #fff;
  border: 2px solid #ccc;
  position: absolute;
  top: 40px;
  left: 55px;

  .main-nav {
    padding: 18px;
    .nav-item {
      margin-top: 20px;
    }
    .search-box {
      display: flex;
      .article-search,
      .user-search {
        display: flex;
        margin-left: 20px;
        span {
          margin-top: 8px;
        }
        .articleId-input,
        .userId-input {
          margin: 0 140px 0 20px;
          width: 200px;
        }
      }
      .time-search {
        margin-left: 20px;
      }
      .search-btn {
        margin-left: 160px;
      }
    }
    .content-list {
      width: calc(100% - 40px);
      margin: 50px auto;

      .action-option {
        margin-right: 12px;
        width: 20px;
        border-bottom: 1px solid #0aadf8;
        a {
          color: #0aadf8;
        }
        a:hover {
          color: #3c80a0;
        }
      }
    }
    .content-detail {
      width: calc(100% - 100px);
      margin: auto;
      height: 200px;
      overflow: auto;
      padding: 20px;
      border: 1px solid #3c80a0;
    }
  }
}

/deep/ .el-tabs__item {
  padding: 0 40px;
}

/deep/ .el-tabs__header {
  margin: 0 20px 15px;
}
.y {
  color: gray;
}
</style>