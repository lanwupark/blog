<template>
    <!--  -->
    <div class="main-box">
        <div class="center-box">
            <div class="main-page">
                <div class="page-title">文章列表</div>
                <div class="msg-item" v-for="(item, index) in hotMsg" :key="index" @click="articleDetail(item.ArticleID)">
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
                            <span>浏览量:</span>
                            <span>{{item.Hits}}</span>
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
export default {
    components: {
        Person,
        Friends,
        Bottom,
    },
    data() {
      return {
        activeName: 'first',
        hotMsg: [
            // {
            //     title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
            //     website: '训练营',
            //     tip: '考研',
            //     time: '两天前',
            //     comment: 20,
            //     lastReply: 'canson'
            // },
            // {
            //     title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
            //     website: '训练营',
            //     tip: '考研',
            //     time: '两天前',
            //     comment: 20,
            //     lastReply: 'canson'
            // },
            // {
            //     title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
            //     website: '训练营',
            //     tip: '考研',
            //     time: '两天前',
            //     comment: 20,
            //     lastReply: 'canson'
            // },
            // {
            //     title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
            //     website: '训练营',
            //     tip: '考研',
            //     time: '两天前',
            //     comment: 20,
            //     lastReply: 'canson'
            // },
            // {
            //     title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
            //     website: '训练营',
            //     tip: '考研',
            //     time: '两天前',
            //     comment: 20,
            //     lastReply: 'canson'
            // },
            // {
            //     title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
            //     website: '训练营',
            //     tip: '考研',
            //     time: '两天前',
            //     comment: 20,
            //     lastReply: 'canson'
            // },
        ],
        articleDetailInfo: {},
      };
    },
    methods: {
        articleDetail(param) {
            console.log(param);
            // 请求文章详情
            let that = this;
            that.$http.get(`/article/${param}`).then((res) =>{
                console.log(res, 1111);
                that.articleDetailInfo = res.data.Result;
                that.$router.push({name: 'read', params: {
                            articleDetail: that.articleDetailInfo
                        }})
            }).catch(e=>e)
        }
    },
    created() {
        let articleList = this.$route.params.articleList;
        this.hotMsg = articleList;
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
        top: 820px;
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

    &:hover {
        cursor: pointer;
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




/deep/ .el-tabs__item {
    padding: 0 40px;
}

/deep/ .el-tabs__header {
    margin: 0 20px 15px;
}
</style>