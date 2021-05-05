<template>
    <div class="topbox">
        <img class="logo" src="@/assets/img/logo.png" alt="">
        <span class="title">Blog</span>
        <el-input placeholder="文章搜索" v-model="pageSearch" class="search" clearable>
            <el-button slot="append" icon="el-icon-search" @click.native="searchArticle"></el-button>
        </el-input>
        <div class="login">
            <img  class="login-logo" src="@/assets/img/user.jpg" alt="">
            <div class="login-text">
                <a class="login-text-right" href="https://github.com/login/oauth/authorize?client_id=8e4ba0b6518357eb4f7d&redirect_uri=http://139.198.187.220:8080/oauth/redirect" ref="login"><span class="login-text-left">Github</span>登录</a>
                <!-- <a >Login with GitHub</a> -->
            </div>
            
        </div>
    </div>
</template>

<script>
// fill in your cliend_id
//   const client_id = '8e4ba0b6518357eb4f7d';

//   const authorize_uri = 'https://github.com/login/oauth/authorize';
//   const redirect_uri = 'http://139.198.187.220:8080/oauth/redirect';

//   const link = document.getElementById('login');
    // console.log(link, 222);    
  
    export default {
        data() {
            return {
                pageSearch:'',
                articleList: [],
                // authorize_uri,
                // redirect_uri,
            }
        },
        created() {
            // debugger;
            // link.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`;
            // this.$refs.login
        },
        methods: {
            // 搜索文章
            searchArticle() {
                // 请求
                let that = this;
                that.$http.get(`/article/query`).then((res) =>{
                    that.articleList = res.data.ResultList;
                    if(this.$route.path !== '/articleList') {
                            that.$router.push({name: 'articleList', params: {
                            articleList: that.articleList
                        }})
                    }
                }).catch(e=>e)
            },
        },
    }
</script>

<style lang="scss" scoped>
.topbox {
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #000;

    .logo {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 5px;
        left: 100px;
    }

    .title {
        color: #fff;
        font-size: 26px;
        position: absolute;
        top: 22px;
        left: 174px;
    }

    .search {
        position: absolute;
        width: 340px;
        height: 30px;
        top: 25px;
        left: 300px;
    }

    .login {
        display: flex;
        position: absolute;
        width: 130px;
        height: 30px;
        top: 25px;
        right: 10px;
        background-color: #ccc;
        border-radius: 2px;

        .login-logo {
            width: 20px;
            height: 20px;
            position: relative;
            border-radius: 4px;
            top: 5px;
            left: 10px;
        }

        .login-text {
            position: relative;
            left: 18px;
            color: #333;
            font-size: 12px;
            font-weight: bold;
            line-height: 30px;
        }

        .login-text-left {
            margin-right: 3px;
        }
    }
}
</style>