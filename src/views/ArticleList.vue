<template>
    <!--  -->
    <div class="main-box">
        <div id="nav">
            <!-- 顶部公共组件 -->
            <Top></Top>
        </div>
        <div class="center-box">
            <div class="backMain" @click="goback">返回首页>></div>
            <span class="backMain myArticle" @click="myArticle">我的文章>></span>
            <div class="main-page">
                <div class="page-title">文章列表</div>
                <div class="msg-item" v-for="(item, index) in hotMsg" :key="index">
                    <!-- 标题、信息数量 -->
                    <div class="item-top">
                        <div class="msg-title" @click="articleDetail(item.ArticleID)" :id="item.ArticleID">{{item.Title}}</div>
                        <div class="comment">
                            <img src="../assets/img/msg2.png" alt="">
                            <span>{{item.CommentNumber}}</span>
                        </div>
                        <el-button class="deleteBtn" type="danger" icon="el-icon-delete" @click="deleteArticle(item.ArticleID)" circle></el-button>
                    </div>
                    <!-- 网站、tip、时间、回复人 -->
                    <div class="item-bottom">
                        <div class="msg-ldetail">
                            <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                        </div>
                        <div class="msg-rdetail">
                            <span>{{item.LastEditDateString}}</span>
                            <span>浏览量:</span>
                            <span>{{item.Hits}}</span>
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
        activeName: 'first',
        hotMsg: [],
        articleDetailInfo: {},
      };
    },
    methods: {
        // 返回主页
        goback() {
            this.$router.push('/')
        },
        // 我的文章
        myArticle() {
            this.myArticleId;
            this.$router.push({name: 'person', params: {
                myArticleId: this.myArticleId
            }})
        },
        articleDetail(param) {
            console.log('nayige',param);
            // 请求文章详情,
            let that = this;
            that.$router.push({path: `/read/${param}`})
        },
        // 删除文章
        deleteArticle(articleID) {
            let that = this;
            that.$http.delete(`/article/comment/${articleID}`).then((res) =>{
                    console.log(666, res.data);
                    alert('success')
                }).catch(e=>e)
        },
    },
    created() {
        let articleList = this.$route.params.articleList;
        this.hotMsg = articleList;
        console.log(1421, this.hotMsg);
    },
};
</script>

<style lang="scss" scoped>
.main-box{
    position: relative;
    background:#eee;
    .center-box {
        min-height: 3200px;
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
        .main-page {
            width: calc(100% - 490px);
            min-height: 724px;
            background: #fff;
            border: 2px solid #ccc;
            position: absolute;
            top: 40px;
            left: 55px;

            .main-nav {
                padding: 18px;
            }
        }
    }

    .bottom {
        width: 100%;
        position: absolute;
        top: 3200px;
        left: 0;
    }
}


/* 每一条信息 */
.msg-item {
    height: 100px;
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
        .msg-title:hover {
            cursor: pointer;
        }
        .comment {
            margin-right: 60px;
            position: relative;
            top: -5px;

            img {
                width: 42px;
                height: 42px;
                position: relative;
                top: 4px;
            }

            span {
                position: relative;
                top: -12px;
                left: 10px;
            }
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

/deep/ .el-tabs__item {
    padding: 0 40px;
}

/deep/ .el-tabs__header {
    margin: 0 20px 15px;
}

/deep/ .deleteBtn {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 1410px;
}
</style>