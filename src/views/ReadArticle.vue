<template>
    <div class="read-box">
        <div class="center-box">
            <!-- 阅读文章 -->
            <div class="read-page">
                <div class="article-content" v-for="(item, index) in article" :key="index">
                    <!-- 文章标题 -->
                    <div class="article-title">{{item.title}}</div>
                    <!-- 文章tip -->
                    <div class="article-tip">
                        <span>{{item.click}}点击</span>
                        <span>作者：{{item.author}}</span>
                        <span>发布时间：{{item.releaseTime}}</span>
                        <div class="collection">
                            {{item.collection}}人收藏
                            <img src="../assets/img/star2.png" alt="">
                        </div>
                    </div>
                    <!-- 简介 -->
                    <div class="introduction">
                        <div class="introduction-title">1.简介</div>
                        <div class="introduction-text">{{item.introduction}}</div>
                    </div>
                    <!-- 原理 -->
                    <div class="principle">
                        <div class="principle-title">2.原理</div>
                        <div class="principle-text">{{item.principle}}</div>
                    </div>

                    <!-- 点赞 -->
                    <div class="like">
                        <div class="likeText">{{item.like}}</div>
                        <img src="../assets/img/like.png" alt="">
                    </div>
                    <!-- 回复 -->
                    <div class="replyBox">
                        <span>{{replyMsg.length}}回复</span>
                        <div class="reply" v-for="(item, index) in replyMsg" :key="index">
                            <img :src="item.pic" alt="">
                            <div class="userInfo">
                                <span class="userName">{{item.name}}</span>
                                <span class="replyTime">{{item.time}}</span>
                                <div class="repltContent">{{item.content}}</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 评论 -->
                    <div class="addReply">
                        <span>增加一条新回复</span>
                        <textarea class="replyBox"/>
                        <div class="submit">提交</div>
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
            article: [
                {
                    title: 'Go语言原理',
                    click: '110',
                    author: 'eanson023',
                    releaseTime: '2020-12-18',
                    collection: '2',
                    introduction: '提供可插播的Go微服务客户端注册到Eureka中心。点击：GitHub地址，欢迎各位多多start！（已通过测试验证，用于正式生产部署）',
                    principle: 'goeureka主要是通过REST请求来与server进行通信。其中Java版本的核心实现请参看：com.netflix.discovery.DiscoveryClient实现过程',
                    like: 'xx,xxx,xxx,xxx 5人觉得很赞',
                    reply: '3',
                }
            ],
            replyMsg: [
                {
                    pic: require('../assets/img/user2.png'),
                    name: 'pink',
                    time: '1小时前',
                    content: 'goeureka主要是通过REST请求来与server进行通信。',
                },
                {
                    pic: require('../assets/img/user2.png'),
                    name: 'lily',
                    time: '2小时前',
                    content: 'goeureka主要是通过REST请求来与server进行通信。',
                },
                {
                    pic: require('../assets/img/user2.png'),
                    name: 'JACK',
                    time: '2天前',
                    content: 'goeureka主要是通过REST请求来与server进行通信。',
                },
            ],
        }
    },
};
</script>

<style lang="scss" scoped>
.read-box{
    position: relative;
    background:#eee;
    .center-box {
        height: 1200px;
        position: relative;

        .right {
            position: absolute;
            right: 40px;
        }
    }
    .bottom {
        width: 100%;
        position: absolute;
        top: 1180px;
        left: 0;
    }
}
.read-page {
    width: calc(100% - 490px);
    background: #fff;
    border: 2px solid #ccc;
    height: 1080px;
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
            img{
                width: 28px;
                height: 28px;
                position: relative;
                top: 8px;
                left: 6px;
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

        .introduction-text,
        .principle-text {
            margin-top: 10px;
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
        }
    }

    .replyBox {
        width: calc(100% - 120px);
        height: 260px;
        margin: 0 60px;
        padding-top: 6px;
        border: 1px solid #888;

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
            top: 238px;

            &:hover {
                background: #555;
                cursor: pointer;
            }
        }
    }
}
</style>