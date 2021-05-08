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
                                <span>ArticleID</span>   
                                <el-input
                                    placeholder="请输入内容"
                                    v-model="articleform.article_id"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="user-search">
                                <span>UserID</span>   
                                <el-input
                                    placeholder="请输入内容"
                                    v-model="articleform.user_login"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="time-search">
                                <span style="margin-right:10px;">开始时间</span>   
                              <el-date-picker
                                v-model="articleform.date_from"
                                style="margin-right:10px;"
                                placeholder="选择开始日期">
                                </el-date-picker>
                               <span style="margin-right:10px;">结束时间</span>   
                                 <el-date-picker
                                v-model="articleform.date_to"
                                placeholder="选择结束日期">
                                </el-date-picker>
                            </div>
                            <el-button class="search-btn" @click="formsearch">Search</el-button>
                        </div>
                        <div class="content-list">
                            <el-table
                                :data="tableData"
                                height="400"
                                border
                                @row-click = "rowclick"
                                style="width: 100%">
                                <el-table-column
                                    prop="ArticleID"
                                    label="文章id"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="UserID"
                                    label="用户id"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="CreateAt"
                                    label="创建人">
                                </el-table-column>
                                <el-table-column
                                    prop="Status"
                                    label="状态">
                                </el-table-column>
                                <el-table-column
                                    prop="Title"
                                    label="标题">
                                </el-table-column>
                                 <el-table-column
                                    prop="UpdateAt"
                                    label="更新">
                                </el-table-column>
                                 <el-table-column
                                    prop="UserLogin"
                                    label="登陆用户">
                                </el-table-column>
                                <el-table-column
                                    prop="action"
                                    label="Action"
                                >
                                 <template slot-scope="scope">
                                     <el-button size="small" type="text" @click="agree(scope.$index,scope.row)" :disabled="scope.row.disabled">同意</el-button> 
                                     <el-button size="small" type="text" @click="block(scope.$index,scope.row)" :disabled="scope.row.blockdsiabled">拉黑</el-button>
                                     <el-button size="small" type="text" @click="remove(scope.$index,scope.row)">删除</el-button>
                                     <el-button size="small" type="text" @click="detail(scope.$index,scope.row)">文章详情</el-button>
                                 </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="content-detail">{{contentDetail}}</div>
                    </el-tab-pane>
                    <!-- 图片审核 -->
                    <el-tab-pane label="图片审核" name="second" class="nav-item">
                       <div class="search-box">
                            <div class="article-search">
                                <span>album_id</span>   
                                <el-input
                                    placeholder="请输入内容"
                                    v-model="photoform.album_id"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="user-search">
                                <span>user_login</span>   
                                <el-input
                                    placeholder="请输入内容"
                                    v-model="photoform.user_login"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="time-search">
                                 <div class="time-search">
                                <span style="margin-right:1px;">开始时间</span>   
                              <el-date-picker
                                v-model="photoform.date_from"
                                type="date"
                                style="margin-right:1px;"
                                placeholder="选择开始日期">
                                </el-date-picker>
                               <span style="margin-right:1px;">结束时间</span>   
                                 <el-date-picker
                                v-model="photoform.date_to"
                                type="date"
                                placeholder="选择结束日期">
                                </el-date-picker>
                            </div>
                            </div>
                            <el-button class="search-btn" @click="photoSearch">Search</el-button>
                        </div>
                        <div class="content-list">
                            <el-table
                                :data="tableData1"
                                height="400"
                                border
                                @row-click ="rowclick"
                                style="width: 100%">
                                <el-table-column
                                    prop="AlbumID"
                                    label="专辑id"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="AlbumName"
                                    label="专辑名"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="UserID"
                                    label="用户id">
                                </el-table-column>
                                <el-table-column
                                    prop="CreateAt"
                                    label="创建人">
                                </el-table-column>
                                <el-table-column
                                    prop="FileSize"
                                    label="文件大小">
                                </el-table-column>
                                <el-table-column
                                    prop="PhotoName"
                                    label="照片名">
                                </el-table-column>
                                <el-table-column
                                    prop="PhotoOriginalName"
                                    label="照片实际名">
                                </el-table-column>
                                <el-table-column
                                    prop="Status"
                                    label="状态">
                                </el-table-column>
                                
                                  <el-table-column
                                    prop="UserLogin"
                                    label="登录名">
                                </el-table-column>  
                                <el-table-column
                                    prop="action"
                                    label="Action"
                                >
                                 <template slot-scope="scope">
                                     <el-button size="small" type="text" @click="photoAgree(scope.$index,scope.row)" :disabled="scope.row.disabled">同意</el-button> 
                                     <el-button size="small" type="text" @click="photoBlock(scope.$index,scope.row)" :disabled="scope.row.blockdsiabled">拉黑</el-button>
                                     <el-button size="small" type="text" @click="photoRemove(scope.$index,scope.row)">删除</el-button>
                                     <el-button size="small" type="text" @click="photoDetail(scope.$index,scope.row)">文章详情</el-button>
                                 </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="content-detail">{{contentDetail}}</div>
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
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="user-search">
                                <span>UserID</span>   
                                <el-input
                                    placeholder="请输入内容"
                                    v-model="messageForm.page_size"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                             <div class="time-search">
                                <span style="margin-right:10px;">开始时间</span>   
                              <el-date-picker
                                v-model="messageForm.date_from"
                                style="margin-right:10px;"
                                placeholder="选择开始日期">
                                </el-date-picker>
                               <span style="margin-right:10px;">结束时间</span>   
                                 <el-date-picker
                                v-model="messageForm.date_to"
                                placeholder="选择结束日期">
                                </el-date-picker>
                            </div>
                            <el-button class="search-btn" @click="messageClick">Search</el-button>
                        </div>
                        <div class="content-list">
                            <el-table
                                :data="tableData"
                                height="400"
                                border
                                style="width: 100%">
                                <el-table-column
                                    prop="articleId"
                                    label="ArticleID"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="userId"
                                    label="UserID"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="title"
                                    label="Title">
                                </el-table-column>
                                <el-table-column
                                    prop="lastEditDate"
                                    label="LastEditDate">
                                </el-table-column>
                                <el-table-column
                                    prop="status"
                                    label="Status">
                                </el-table-column>
                             <el-table-column
                                    prop="action"
                                    label="Action"
                                >
                                 <template slot-scope="scope">
                                     <el-button size="small" type="text" @click="commentAgree(scope.$index,scope.row)" :disabled="scope.row.disabled">同意</el-button> 
                                     <el-button size="small" type="text" @click="commentBlock(scope.$index,scope.row)" :disabled="scope.row.blockdsiabled">拉黑</el-button>
                                     <el-button size="small" type="text" @click="commentRemove(scope.$index,scope.row)">删除</el-button>
                                     <el-button size="small" type="text" @click="commentDetail(scope.$index,scope.row)">文章详情</el-button>
                                 </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="content-detail">{{contentDetail}}</div>
                    </el-tab-pane>
                    <!-- 用户管理 -->
                    <el-tab-pane label="用户管理" name="four" class="nav-item">
                        <div class="search-box">
                            <div class="article-search">
                                <span>ArticleID</span>   
                                <el-input
                                    placeholder="请输入内容"
                                    v-model="userForm.user_id"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="user-search">
                                <span>UserID</span>   
                                <el-input
                                    placeholder="请输入内容"
                                    v-model="userForm.user_login"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="time-search">
                                <span style="margin-right:10px;">开始时间</span>   
                              <el-date-picker
                                v-model="userForm.date_from"
                                style="margin-right:10px;"
                                placeholder="选择开始日期">
                                </el-date-picker>
                               <span style="margin-right:10px;">结束时间</span>   
                                 <el-date-picker
                                v-model="userForm.date_to"
                                placeholder="选择结束日期">
                                </el-date-picker>
                            </div>
                            <el-button class="search-btn" @click="userClick">Search</el-button>
                        </div>
                        <div class="content-list">
                            <el-table
                                :data="tableData3"
                                height="400"
                                border
                                style="width: 100%">
                                <el-table-column
                                    prop="Blog"
                                    label="博客"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="CreateAt"
                                    label="创建人"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="Email"
                                    label="邮箱">
                                </el-table-column>
                                <el-table-column
                                    prop="IsAdmin"
                                    label="是否管理员">
                                </el-table-column>
                                <el-table-column
                                    prop="Localtion "
                                    label="位置">
                                </el-table-column>
                                  <el-table-column
                                    prop="Status "
                                    label="状态">
                                </el-table-column>
                                  <el-table-column
                                    prop="UpdateAt "
                                    label="刷新">
                                </el-table-column>
                                  <el-table-column
                                    prop="UserID "
                                    label="用户id">
                                </el-table-column>
                                 <el-table-column
                                    prop="UserLogin "
                                    label="登录">
                                </el-table-column>
                                <el-table-column
                                    prop="action"
                                    label="Action"
                                >
                                 <template slot-scope="scope">
                                     <el-button size="small" type="text" @click="userAgree(scope.$index,scope.row)" :disabled="scope.row.disabled">同意</el-button> 
                                     <el-button size="small" type="text" @click="userBlock(scope.$index,scope.row)" :disabled="scope.row.blockdsiabled">拉黑</el-button>
                                     <el-button size="small" type="text" @click="userRemove(scope.$index,scope.row)">删除</el-button>
                                     <el-button size="small" type="text" @click="userDetail(scope.$index,scope.row)">文章详情</el-button>
                                 </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="content-detail">{{contentDetail}}</div>
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
      return {
          dis:false,
          articleform:{
            article_id:"",
            user_login:"",
            date_from:"",
            date_to:""
          },
         
          photoform:{
            album_id:"",
            user_login:"",
            date_from:"",
            date_to:""
          },
        
          messageForm:{
        //    article_id:"",
        //    comment_id:"",
        //    date_from:"",
        //    date_to:""
          },
          userForm:{
            user_id:"",
            user_login:"",
            date_from:"",
            date_to:""
          },
         
        activeName: 'first',
        articleIdInput: '',
        userIdInput: '',
        value1: '',
        tableData: [
            {
            articleId: '1022507679219722',
            userId: '2131231321223167',
            title: 'go语言发展背景',
            lastEditDate: '2021-4-22',
            status: '已同意',
            },
            {
            articleId: '1023131679219722',
            userId: '2167261321223167',
            title: 'Vue双向数据绑定',
            lastEditDate: '2021-4-12',
            status: '已同意',
            },
            {
            articleId: '1023131628219722',
            userId: '2169261321213167',
            title: 'Vue3与Vue2区别',
            lastEditDate: '2021-3-18',
            status: '已同意',
            },
            {
            articleId: '1023131778219722',
            userId: '3167261321223167',
            title: '博客系统需求分析',
            lastEditDate: '2021-3-13',
            status: '已同意',
            },
            {
            articleId: '1023131628009722',
            userId: '5167261321223167',
            title: 'MySQL和MongoDB使用场景',
            lastEditDate: '2020-12-12',
            status: '已同意',
            },
            {
            articleId: '1055131628219722',
            userId: '7167261321223167',
            title: 'OAuth2.0授权原理',
            lastEditDate: '2020-12-31',
            status: '已同意',
            },
            {
            articleId: '1123131628219722',
            userId: '8167261321223167',
            title: 'ELementUI的表单使用',
            lastEditDate: '2021-10-12',
            status: '已同意',
            },
            {
            articleId: '1923131628219722',
            userId: '1767261321223167',
            title: '上海市普陀区金沙江路',
            lastEditDate: '2021-6-11',
            status: '已同意',
            },
        ],
        tableData1:[],
        tableData2:[],
        tableData3:[],
        statusArr:{
            Y:"正常",
            B:"拉黑",
            D:"删除",
        },
        contentDetail: 'Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。Vue 只关注视图层， 采用自底向上增量开发的设计。Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。Vue 学习起来非常简单，本教程基于 Vue 2.1.8 版本测试，Vue3 请参阅 Vue3 教程。Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。Vue 只关注视图层， 采用自底向上增量开发的设计。Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。Vue 学习起来非常简单，本教程基于 Vue 2.1.8 版本测试，Vue3 请参阅 Vue3 教程。',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      rowclick(row, event, column){
          if (row.Content) {
               this.contentDetail = row.Content
          }else if (row.AlbumName) {
               this.contentDetail = row.AlbumName
          }
      },
    //   文章审核
     async formsearch(){
          console.log(this.articleform);
         let res = await this.$http.get('/admin/article',{
                params:this.articleform
          }
          )
          console.log(res.data.ResultList);
          for (const i in this.statusArr) {
            for (const k in res.data.ResultList) {
                console.log(res.data.ResultList[k]);
                if (res.data.ResultList[k].Status == i) {
                    res.data.ResultList[k].Status = this.statusArr[i]
                    console.log(res.data.ResultList[k].status); 
                }
            }
          }

          for (const i in res.data.ResultList) {
        //    console.log(res.data.ResultList[i]);
           res.data.ResultList[i].disabled = false
           res.data.ResultList[i].blockdsiabled = false
          }

           for (const i in res.data.ResultList) {
              if (res.data.ResultList[i].Status == "正常") {
                    res.data.ResultList[i].disabled = true               
              }else if(res.data.ResultList[i].Status == "拉黑"){
                    res.data.ResultList[i].blockdsiabled = true
              }
          }
          this.tableData = res.data.ResultList
      },
    async changeStatus(data){
      let res = await this.$http.put('/admin/article/'+data.article_id+"/"+data.status)
        console.log(res);
    },
  async agree(index,value){
    await this.changeStatus({article_id:value.ArticleID,status:'Y'})
    await this.formsearch()
     value.disabled=true
     value.blockdsiabled = fasle
    },
  async block(index,value){
         value.blockdsiabled = true
         value.disabled=false
     await this.changeStatus({article_id:value.ArticleID,status:'B'})
     await this.formsearch()

         
    },
  async  remove(index,value){
        await  this.changeStatus({article_id:value.ArticleID,status:'D'})
        await this.formsearch()
    },
    detail(){
        //   this.changeStatus({article_id:value.ArticleID,status:'正常'})
    },
        // 图片审核
    async photoSearch(){
        let res = await this.$http.get('/admin/photo',{
                params:this.photoform
          })
          console.log(res);
           console.log(res.data.ResultList);
      
             for (const i in this.statusArr) {
            for (const k in res.data.ResultList) {
                console.log(res.data.ResultList[k]);
                if (res.data.ResultList[k].Status == i) {
                    res.data.ResultList[k].Status = this.statusArr[i]
                    console.log(res.data.ResultList[k].status); 
                }
            }
          }
           for (const i in res.data.ResultList) {
        //    console.log(res.data.ResultList[i]);
           res.data.ResultList[i].disabled = false
           res.data.ResultList[i].blockdsiabled = false
          }

           for (const i in res.data.ResultList) {
              if (res.data.ResultList[i].Status == "正常") {         
                    res.data.ResultList[i].disabled = true

              }else if(res.data.ResultList[i].Status == "拉黑"){
                    res.data.ResultList[i].blockdsiabled = true
              }
          }
               this.tableData1 = res.data.ResultList
    },
     async changePhotoStatus(data){
      let res = await this.$http.put('/admin/photo/'+data.photo_name+"/"+data.status)
        console.log(res);
    },
   async photoAgree(index,value){
        console.log(value.PhotoName);
       
     await this.changePhotoStatus({photo_name:value.PhotoName,status:'Y'})
     await this.photoSearch()
        value.disabled=true
        value.blockdsiabled = false
    },
   async photoBlock(index,value){
          console.log(value.PhotoName);
         value.blockdsiabled = true
         value.disabled=false
     await this.changePhotoStatus({photo_name:value.PhotoName,status:'B'})
     await this.photoSearch()
    },
   async photoRemove(index,value){
          await this.changePhotoStatus({photo_name:value.PhotoName,status:'D'})
          await this.photoSearch()
    },
        
    // 评论管理
    async messageClick(){
       let res = await this.$http.get("/admin/comment",{
           params:this.messageForm
       })
       for (const i in this.statusArr) {
            for (const k in res.data.ResultList) {
                console.log(res.data.ResultList[k]);
                if (res.data.ResultList[k].Status == i) {
                    res.data.ResultList[k].Status = this.statusArr[i]
                    console.log(res.data.ResultList[k].status); 
                }
            }
          }
           for (const i in res.data.ResultList) {
        //    console.log(res.data.ResultList[i]);
           res.data.ResultList[i].disabled = false
           res.data.ResultList[i].blockdsiabled = false
          }

           for (const i in res.data.ResultList) {
              if (res.data.ResultList[i].Status == "正常") {         
                    res.data.ResultList[i].disabled = true

              }else if(res.data.ResultList[i].Status == "拉黑"){
                    res.data.ResultList[i].blockdsiabled = true
              }
          }
               this.tableData2 = res.data.ResultList
    },
   async changeCommentStatus(){
       let res = await this.$http.put("/admin/comment/"+data.comment_id+"/"+data.status)
    },
   async commentAgree(index,value){
        await this.changeCommentStatus({comment_id:value.CommentID,status:'Y'})
        await this.messageClick()
        value.disabled=true
        value.blockdsiabled = false
    },
   async commentBlock(){
         value.blockdsiabled = true
         value.disabled=false
     await this.changeCommentStatus({comment_id:value.CommentID,status:'B'})
     await this.messageClick()
    },
    async commentRemove(){
          await this.changeCommentStatus({comment_id:value.CommentID,status:'D'})
          await this.messageClick()
    },
    // 用户管理
    async userClick(){
        let res = await this.$http.get("/admin/user",{
            params:this.userForm
        })
         for (const i in res.data.ResultList) {
        //    console.log(res.data.ResultList[i]);
           res.data.ResultList[i].disabled = false
           res.data.ResultList[i].blockdsiabled = false
          }

           for (const i in res.data.ResultList) {
              if (res.data.ResultList[i].Status == "正常") {
                    res.data.ResultList[i].disabled = true
              }else if(res.data.ResultList[i].Status == "拉黑"){
                    res.data.ResultList[i].blockdsiabled = true
              }
          }
        this.tableData3 = res.data.ResultList
        console.log(res.data.ResultList);
    },
    async updateUser(data){
      let res = await this.$http.put('/admin/user/'+data.user_id+"/"+data.status)
    },
   async userAgree(index,value){
         value.disabled=true
         value.blockdsiabled = false
    await this.updateUser({user_id:value.UserID,status:'Y'})
    await this.userClick()
    },
   async userBlock(index,value){
        value.disabled=false
        value.blockdsiabled = true
    await this.updateUser({user_id:value.UserID,status:'B'})
    await this.userClick()
    },
  async  userRemove(index,value){
     await this.updateUser({user_id:value.UserID,status:'D'})
     await this.userClick()
    }

    },
    
};
</script>

<style lang="scss" scoped>
.main-box{
    position: relative;
    background:#eee;
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
.y{
    color: gray;
}
</style>