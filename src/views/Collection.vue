<template>
    <!--  -->
    <div class="main-box">
        <div class="center-box">
            <div class="main-page">
                <div class="page-title">收藏列表</div>
                <div class="msg-item" v-for="(item, index) in hotMsg" :key="index">
                    <!-- 标题、信息数量 -->
                    <div class="item-top">
                        <div class="msg-title">{{item.title}}</div>
                        <div class="comment">
                            <img src="../assets/img/msg2.png" alt="">
                            {{item.comment}}
                        </div>
                    </div>
                    <!-- 网站、tip、时间、回复人 -->
                    <div class="item-bottom">
                        <div class="msg-ldetail">
                            <span>{{item.website}}</span>
                            <span>{{item.tip}}</span>
                        </div>
                        <div class="msg-rdetail">
                            <span>{{item.time}}</span>
                            <span>最后回复于:</span>
                            <span>{{item.lastReply}}</span>
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
            {
                title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
                website: '训练营',
                tip: '考研',
                time: '两天前',
                comment: 20,
                lastReply: 'canson'
            },
            {
                title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
                website: '训练营',
                tip: '考研',
                time: '两天前',
                comment: 20,
                lastReply: 'canson'
            },
            {
                title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
                website: '训练营',
                tip: '考研',
                time: '两天前',
                comment: 20,
                lastReply: 'canson'
            },
            {
                title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
                website: '训练营',
                tip: '考研',
                time: '两天前',
                comment: 20,
                lastReply: 'canson'
            },
            {
                title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
                website: '训练营',
                tip: '考研',
                time: '两天前',
                comment: 20,
                lastReply: 'canson'
            },
            {
                title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
                website: '训练营',
                tip: '考研',
                time: '两天前',
                comment: 20,
                lastReply: 'canson'
            },
        ],
      };
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