<template>
    <!-- 个人信息 -->
    <div class="person-box">
        <div class="center-box">
            <!-- 个人信息 -->
            <div class="backMain" @click="goback">返回首页>></div>
            <div class="personInfo">
                <span class="personInfo-title">个人信息</span>
                <div class="personInfo-user">
                    <img class="personInfo-icon" :src="userHeads" alt="">
                    <div class="user-middle">
                        <div class="userName">{{userInfo.UserLogin}}</div>
                        <div class="oneRow">
                            <span class="user-bio">bio: {{userInfo.bio || 'pretty pretty pretty programmer'}}</span>
                            <div class="user-collection">
                                <span>被收藏</span> 
                                <img src="../assets/img/star.png" alt="">:
                                {{userInfo.StaredNumber}}
                            </div>
                        </div>
                        <div class="twoRow">
                            <span class="user-email">email: {{userInfo.Email || '1234567890@qq.com'}}</span>
                            <div class="user-belike">
                                <span>收获的赞</span>
                                <img src="../assets/img/like.png" alt="">:
                                {{userInfo.FavoritedNumber}}
                            </div>
                        </div>
                    </div>
                    <div class="user-right">
                        <!-- <div class="add-friends" @click="addFriends">加为好友</div> -->
                        <div class="addDay">已加入Lanwupark {{userInfo.DaysJoined}} 天</div>
                    </div>
                </div>
                <div class="personInfo-article">
                    <div class="article-nav">
                        <span class="article-author">{{userInfo.UserLogin}}的文章</span>
                        <router-link to="/write" class="article-write">撰写文章</router-link>
                    </div>
                    <div class="article-items">
                         <div class="msg-item" v-for="(item, index) in personArticle" :key="index">
                            <!-- 标题、评论 收藏 点赞-->
                            <div class="item-top">
                                <div class="msg-title">{{item.Title}}</div>
                                <div class="msg-icon">
                                    <div class="comment">
                                        <img src="../assets/img/msg2.png" alt="">
                                        <span>{{item.CommentNumber}}</span>
                                    </div>
                                    <div class="collection">
                                        <img src="../assets/img/star2.png" alt="">
                                        <span>{{item.StarNumber}}</span>
                                    </div>
                                    <div class="like">
                                        <img src="../assets/img/like.png" alt="">
                                        <span>{{item.FavoriteNumber}}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- 网站、tip、时间、回复人 -->
                            <div class="item-bottom">
                                <div class="msg-ldetail">
                                   <span v-for="(classItem, index) in item.Categories" :key="index">{{classItem}}</span>
                                </div>
                                <div class="msg-rdetail">
                                    <span>{{item.time}}</span>
                                    <span>最后回复于:</span>
                                    <span>{{item.LastEditDateString}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="personInfo-image">
                    <div class="image-nav">
                        <span class="image-author">yanrui6666的相册</span>
                        <router-link to="/album" class="image-add">新建相册</router-link>
                    </div>
                    <div class="image-items">
                        <div class="image-item" v-for="(item, index) in personImage" :key="index">
                            <img :src="item.src" alt="">
                            <div class="image-detail">
                                <span>相册{{item.id}}</span>
                                <span>{{item.time}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="image-more">
                        查看更多>>
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
        // 头像
        userHeads: '',
        // 个人信息
        userInfo: {},
            // {
            //     icon: require('../assets/img/person.png'),
            //     userName: 'yanrui6666',
            //     bio: 'hello world',
            //     email: 'yanrui666@qq.com',
            //     collection: '10',
            //     beLike: '111',
            //     joinDay: '320',
            // }
        // 文章
        personArticle: [
            // {
            //     title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
            //     website: '训练营',
            //     tip: '考研',
            //     time: '两天前',
            //     lastReply: 'canson',
            //     comment: '2',
            //     collection: '10',
            //     like: '38',
            // },
            // {
            //     title: '[王道官方公告] 王道训练营2021年开班情况（短期班、Python|C++|JAVA）',
            //     website: '训练营',
            //     tip: '考研',
            //     time: '两天前',
            //     lastReply: 'canson',
            //     comment: '2',
            //     collection: '10',
            //     like: '38',
            // },
        ],
        // 相册
        personImage: [
            {
                id: '1',
                src: require("../assets/img/user.jpg"),
                time: '2021-01-12',
            },
            {
                id: '2',
                src: require("../assets/img/user.jpg"),
                time: '2021-02-12',
            },
            {
                id: '3',
                src: require("../assets/img/user.jpg"),
                time: '2021-03-12',
            }
        ],
      };
    },
    methods: {
      // 返回主页
      goback() {
          this.$router.push('/oauth/token')
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
    created() {
        // 请求用户信息
        let that = this;
        let userID = '';
        that.$http.get('/user').then((res) =>{
            that.userInfo = res.data
            console.log(res.data, 4);
            userID = res.data.UserID;
            that.userHeads = `https://avatars1.githubusercontent.com/u/${userID}?v=4`;
            that.$http.get(`/user/${userID}`).then((res) =>{
                that.userInfo = res.data.Result;
                that.personArticle = res.data.Result.ArticleMaintains;
                console.log(res, 5);
            }).catch(e=>e)
        }).catch(e=>e)
    },
};
</script>

<style lang="scss" scoped>
.person-box {
    position: relative;
    background:#eee;
    .center-box {
        height: 1100px;
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
      
        .personInfo {
            width: calc(100% - 590px);
            min-height: 900px;
            background: #fff;
            border: 2px solid #ccc;
            position: absolute;
            top: 20px;
            left: 55px;
            padding: 40px 50px 10px 50px;

            .personInfo-title {
                color: #555;
                font-size: 18px;
                margin-left: 50px;
            }

            .personInfo-user {
                display: flex;
                margin: 30px 40px;
                justify-content: space-between;

                .personInfo-icon {
                    width: 110px;
                    height: 110px;
                }

                .user-middle {
                    margin-left: -380px;
                    .userName {
                        font-size: 22px;
                        color: #333;
                        margin: -6px 0 40px 40px;
                    }

                    .oneRow,
                    .twoRow {
                        display: flex;
                        margin: 0 40px 30px 40px;

                        .user-collection,
                        .user-belike {
                            margin: -8px 0 0 80px;
                            img {
                                position: relative;
                                top: 6px;
                                left: 4px;
                                width: 25px;
                                height: 25px;
                                margin-right: 5px;
                            }
                        }
                        .user-belike {
                            margin-left: 220px;
                        }

                        .user-collection {
                            padding-left: 80px;
                        }
                    }
                }
              
                .user-right {
                    margin-right: 100px;
                     .add-friends {
                        background: #333;
                        width: 150px;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        color: #fff;
                        font-size: 14px;
                        margin-bottom: 85px;

                        &:hover {
                            background: #666;
                        }
                    }
                    .addDay {
                        
                    }
                }
            }

            .personInfo-article,
            .personInfo-image {
                .article-nav,
                .image-nav {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 168px 0 40px;

                    .article-author,
                    .image-author {
                        color: #333;
                        margin-top: 8px;
                    }
                    .article-write,
                    .image-add {
                        width: 150px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border: 1px solid #bbb;
                        color: #333;

                        &:hover {
                            background: #ccc;
                        }
                    }
                }

                .article-items {
                    margin: 30px 20px 0 20px ;
                    border: 1px solid #ccc;
                    border-top: none;
                    padding: 40px 40px 10px 40px;

                    .msg-item {
                        border-bottom: 1px solid #ccc;
                        padding-bottom: 4px;
                        margin-bottom: 20px;
                        &:last-child {
                            border: none;
                            margin-bottom: 0;
                        }
                        .item-top {
                            display: flex;
                            justify-content: space-between;
                            img {
                                width: 30px;
                                height: 30px;
                            }

                            .msg-icon {
                                display: flex;
                                div {
                                    margin-right: 60px;
                                }

                                span {
                                    position: relative;
                                    top: -8px;
                                    left: 8px;
                                }
                            }
                        }
                        .item-bottom {
                            width: 500px;
                            display: flex;
                            justify-content: space-between;

                            .msg-ldetail span,
                            .msg-rdetail span {
                                margin-right: 30px;
                            }
                        }
                    }
                }
                
            }

            .personInfo-image {
                position: relative;
                margin-top: 40px;

                .image-items {
                    display: flex;
                    justify-content: space-between;
                    padding: 40px;
                    padding-right: 165px;

                    .image-item {
                        img {
                            width: 240px;
                            height: 180px;
                        }
                        .image-detail {
                            display: flex;
                            justify-content: space-between;

                            span:first-child {
                                margin-left: 20px;
                            }
                            span:last-child {
                                margin-right: 20px;
                            }
                            
                        }
                    }
                    
                }

                .image-more {
                    position: absolute;
                    right: 8px;
                    top: 235px;
                    color: #999;

                    &:hover {
                        color: #ccc;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .bottom {
        width: 100%;
        position: absolute;
        // top: 1050px;
        left: 0;
    }
    
}


</style>