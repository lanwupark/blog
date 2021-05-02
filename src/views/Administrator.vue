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
                                    v-model="articleIdInput"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="user-search">
                                <span>UserID</span>   
                                <el-input
                                    placeholder="请输入内容"
                                    v-model="userIdInput"
                                    clearable
                                    class="articleId-input">
                                </el-input>
                            </div>
                            <div class="time-search">
                                <el-date-picker
                                    v-model="value1"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                            <el-button class="search-btn">Search</el-button>
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
                                    <span class="action-option"><a href="">同意</a></span>
                                    <span class="action-option"><a href="">拉黑</a></span>
                                    <span class="action-option"><a href="">删除</a></span>
                                    <span class="action-option"><a href="">文章详情</a></span>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="content-detail">{{contentDetail}}</div>
                    </el-tab-pane>
                    <!-- 图片审核 -->
                    <el-tab-pane label="图片审核" name="second" class="nav-item">
                      
                    </el-tab-pane>
                    <!-- 留言管理 -->
                    <el-tab-pane label="留言管理" name="third" class="nav-item">
                       
                    </el-tab-pane>
                    <!-- 用户管理 -->
                    <el-tab-pane label="用户管理" name="four" class="nav-item">
                       
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
        contentDetail: 'Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。Vue 只关注视图层， 采用自底向上增量开发的设计。Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。Vue 学习起来非常简单，本教程基于 Vue 2.1.8 版本测试，Vue3 请参阅 Vue3 教程。Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。Vue 只关注视图层， 采用自底向上增量开发的设计。Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。Vue 学习起来非常简单，本教程基于 Vue 2.1.8 版本测试，Vue3 请参阅 Vue3 教程。',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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
</style>