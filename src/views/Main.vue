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
                    <el-scrollbar style='height:100%'>
                    <el-tabs class="main-nav" v-model="activeName" @tab-click="handleClick">
                        <!-- 最热页面 -->
                        <el-tab-pane label="最热" name="first" class="nav-item">
                            <div class="msg-item" v-for="(item, index) in hotMsg" :key="index">
                                <!-- 标题、信息数量 -->
                                <div class="item-top">
                                    <div class="msg-title">{{item.Title}}</div>
                                    <div class="comment">
                                        <img src="../assets/img/msg2.png" alt="">
                                        {{item.CommentNumber}}
                                    </div>
                                </div>
                                <!-- 网站、tip、时间、回复人 -->
                                <div class="item-bottom">
                                    <div class="msg-ldetail">
                                        <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                                    </div>
                                    <div class="msg-rdetail">
                                        <span>{{item.LastEditDateString}}</span>
                                        <span>最后回复于:</span>
                                        <span>{{item.LastEditUserLogin}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <!-- 编程页面 -->
                        <el-tab-pane :label="categories[4]" name="second" class="nav-item">
                           <div class="msg-item" v-for="(item, index) in programming" :key="index">
                                <!-- 标题、信息数量 -->
                                <div class="item-top">
                                    <div class="msg-title">{{item.Title}}</div>
                                    <div class="comment">
                                        <img src="../assets/img/msg2.png" alt="">
                                        {{item.CommentNumber}}
                                    </div>
                                </div>
                                <!-- 网站、tip、时间、回复人 -->
                                <div class="item-bottom">
                                    <div class="msg-ldetail">
                                        <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                                    </div>
                                    <div class="msg-rdetail">
                                        <span>{{item.LastEditDateString}}</span>
                                        <span>最后回复于:</span>
                                        <span>{{item.LastEditUserLogin}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                         <!-- 生活页面 -->
                        <el-tab-pane :label="categories[5]" name="three" class="nav-item">
                           <div class="msg-item" v-for="(item, index) in lifeMsg" :key="index">
                                <!-- 标题、信息数量 -->
                                <div class="item-top">
                                    <div class="msg-title">{{item.Title}}</div>
                                    <div class="comment">
                                        <img src="../assets/img/msg2.png" alt="">
                                        {{item.CommentNumber}}
                                    </div>
                                </div>
                                <!-- 网站、tip、时间、回复人 -->
                                <div class="item-bottom">
                                    <div class="msg-ldetail">
                                        <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                                    </div>
                                    <div class="msg-rdetail">
                                        <span>{{item.LastEditDateString}}</span>
                                        <span>最后回复于:</span>
                                        <span>{{item.LastEditUserLogin}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                         <!-- 军事页面 -->
                        <el-tab-pane :label="categories[6]" name="four" class="nav-item">
                           <div class="msg-item" v-for="(item, index) in militaryMsg" :key="index">
                                <!-- 标题、信息数量 -->
                                <div class="item-top">
                                    <div class="msg-title">{{item.Title}}</div>
                                    <div class="comment">
                                        <img src="../assets/img/msg2.png" alt="">
                                        {{item.CommentNumber}}
                                    </div>
                                </div>
                                <!-- 网站、tip、时间、回复人 -->
                                <div class="item-bottom">
                                    <div class="msg-ldetail">
                                        <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                                    </div>
                                    <div class="msg-rdetail">
                                        <span>{{item.LastEditDateString}}</span>
                                        <span>最后回复于:</span>
                                        <span>{{item.LastEditUserLogin}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                         <!-- 挖矿页面 -->
                        <el-tab-pane :label="categories[0]" name="five" class="nav-item">
                           <div class="msg-item" v-for="(item, index) in minig" :key="index">
                                <!-- 标题、信息数量 -->
                                <div class="item-top">
                                    <div class="msg-title">{{item.Title}}</div>
                                    <div class="comment">
                                        <img src="../assets/img/msg2.png" alt="">
                                        {{item.CommentNumber}}
                                    </div>
                                </div>
                                <!-- 网站、tip、时间、回复人 -->
                                <div class="item-bottom">
                                    <div class="msg-ldetail">
                                        <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                                    </div>
                                    <div class="msg-rdetail">
                                        <span>{{item.LastEditDateString}}</span>
                                        <span>最后回复于:</span>
                                        <span>{{item.LastEditUserLogin}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                         <!-- 科技报页面 -->
                        <el-tab-pane :label="categories[1]" name="six" class="nav-item">
                           <div class="msg-item" v-for="(item, index) in scienceNews" :key="index">
                                <!-- 标题、信息数量 -->
                                <div class="item-top">
                                    <div class="msg-title">{{item.Title}}</div>
                                    <div class="comment">
                                        <img src="../assets/img/msg2.png" alt="">
                                        {{item.CommentNumber}}
                                    </div>
                                </div>
                                <!-- 网站、tip、时间、回复人 -->
                                <div class="item-bottom">
                                    <div class="msg-ldetail">
                                        <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                                    </div>
                                    <div class="msg-rdetail">
                                        <span>{{item.LastEditDateString}}</span>
                                        <span>最后回复于:</span>
                                        <span>{{item.LastEditUserLogin}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                         <!-- 比特币页面 -->
                        <el-tab-pane :label="categories[2]" name="seven" class="nav-item">
                           <div class="msg-item" v-for="(item, index) in bitcoin" :key="index">
                                <!-- 标题、信息数量 -->
                                <div class="item-top">
                                    <div class="msg-title">{{item.Title}}</div>
                                    <div class="comment">
                                        <img src="../assets/img/msg2.png" alt="">
                                        {{item.CommentNumber}}
                                    </div>
                                </div>
                                <!-- 网站、tip、时间、回复人 -->
                                <div class="item-bottom">
                                    <div class="msg-ldetail">
                                        <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                                    </div>
                                    <div class="msg-rdetail">
                                        <span>{{item.LastEditDateString}}</span>
                                        <span>最后回复于:</span>
                                        <span>{{item.LastEditUserLogin}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                     </el-scrollbar>
                </div>
           
            <!-- 头侧用户和好友列表 -->
            <div class="right" v-show="logined">
                <Person></Person>
                <Friends></Friends>
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
      return {
        logined: false,
        activeName: 'first',
        categories: [],
        hotMsg: [], // 最热
        programming: [], // 编程
        lifeMsg: [], // 生活
        militaryMsg: [], // 军事 
        minig: [], // 挖矿
        scienceNews: [], // 科技报
        bitcoin: [], // 比特币
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    created() {
        // 登录成功显示完整页面
        let that = this;
        that.$http.get('/user').then((res) =>{
            console.log(res, 1111);
            that.logined = true;
        }).catch(e=>e)

        that.$http.get('/article/categories').then((res) =>{
            console.log(res, '类别');
            that.categories = res.data.ResultList;
        }).catch(e=>e)

        // 文章列表-最热
        that.$http.get('/article/query').then((res) =>{
            console.log(12, res);
            that.hotMsg = res.data.ResultList;
        }).catch(e=>e)

        // 生活 军事 挖矿 科技报 比特币
        // 文章列表-编程
        var category_name= '生活'
        that.$http.get(`/article/query?category_name=${category_name}`).then((res) =>{
            console.log(22, res);
            that.programming = res.data.ResultList;
        }).catch(e=>e)

       
    }
};
</script>

<style lang="scss" scoped>
body .el-scrollbar__wrap {
    overflow-x: hidden;
}
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
        top: 900px;
        left: 0;
    }
}

.main-page {
    width: calc(100% - 490px);
    height: 724px;
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
        .comment img{
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