<template>
    <!-- 收藏 -->
    <div class="main-box">
        <div id="nav">
            <!-- 顶部公共组件 -->
            <Top></Top>
        </div>
        <div class="center-box">
            <div class="backMain" @click="goback">返回首页>></div>
            <span class="backMain createAlbum" @click="createAlbum">个人信息>></span>
            <div class="main-page">
                <div class="page-title">收藏列表</div>
                <div class="msg-item" v-for="(item, index) in collection" :key="index">
                    <!-- 标题、信息数量 -->
                    <div class="item-top">
                        <div class="msg-title" @click="articleDetail(item.ArticleID)" :id="item.ArticleID">{{item.Title}}</div>
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
            </div>
            <!-- 头侧用户和好友列表 -->
            <div class="right">
                <Person></Person>
                <Friends></Friends>
            </div>
        </div>
       <!-- 底部公共组件 -->
        <div class="bottom">
            <Bottom></Bottom>
        </div>
    </div>
</template>

<script>
import Person from "@/components/Person.vue";
import Friends from "@/components/Friends.vue";
import Bottom from "@/components/Bottom.vue";
import Top from "@/components/Top.vue";
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
        collection: [],
      };
    },
    methods: {
        // 返回主页
        goback() {
            this.$router.push("/");
        },
        createAlbum() {
            this.$router.push("/person");
        },
        articleDetail(param) {
            console.log('nayige',param);
            // 请求文章详情,
            let that = this;
            that.$router.push({path: `/read/${param}`})
        },
    },
    created () {
        // 请求用户信息
        let that = this;
        let userID = '';
        that.$http.get('/user').then((res) =>{
            console.log(res.data, 4);
            userID = res.data.UserID;
            that.$http.get(`/article/favorite/${userID}`).then((res) =>{
                that.collection = res.data.ResultList;
                console.log(480, res.data);
            }).catch(e=>e)
        }).catch(e=>e)
       
    }
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
        top: 980px;
        left: 0;
    }
}

.main-page {
    width: calc(100% - 490px);
    height: 780px;
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
        .msg-title:hover {
            cursor: pointer;
        }
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

/deep/ .el-tabs__item {
    padding: 0 40px;
}

/deep/ .el-tabs__header {
    margin: 0 20px 15px;
}
</style>