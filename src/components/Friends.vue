<template>
    <!-- 右侧好友列表 -->
    <div class="friends-msg">
        <div class="friends-title">好友列表</div>
        <div class="friends-request">
           <span>qw好友请求</span>
           <a href="#" @click="agree">同意</a>
           <a href="#">拒绝</a>
        </div>
        <div class="friends-list">
            <ul class="list-items">
                <li class="friends-item">
                    <span>好友1</span>
                    <router-link to="/" class="btn-detail">文章</router-link>
                    <router-link to="/" class="btn-detail">相册</router-link>
                </li>
                <li class="friends-item">
                    <span>好友2</span>
                    <router-link to="/" class="btn-detail">文章</router-link>
                    <router-link to="/" class="btn-detail">相册</router-link>
                </li>
                <li class="friends-item">
                    <span>好友3</span>
                    <router-link to="/" class="btn-detail">文章</router-link>
                    <router-link to="/" class="btn-detail">相册</router-link>
                </li>
                <li class="friends-item">
                    <span>好友4</span>
                    <router-link to="/" class="btn-detail">文章</router-link>
                    <router-link to="/" class="btn-detail">相册</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
             // 添加好友
            agree() {
                // 请求
                let that = this;
                that.$http.get('/user/friends'
                // , {
                //         FriendUserLogin: that.$refs.getTitle.value,
                //         Categories: that.checkedItems,
                //         Content: that.validateForm.text,
                // }
                ).then((res) =>{
                    console.log(9, res.data);
                }).catch(e=>e)
            }
        },
    }
</script>

<style lang="scss" scoped>
.friends-msg {
    margin: 30px 0;
    width: 320px;
    height: 410px;
    background: #fff;
    font-size: 14px;
    border: 2px solid #ccc;

    .friends-title {
        padding: 16px!important;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 0!important;
    }
    .friends-item,
    .friends-request {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 34px;

        span {
            line-height: 30px;
        }
    }
    .friends-request a,
    .btn-detail {
        width: 60px;
        text-align: center;
        padding: 6px 10px;
        margin: 0px 18px 0 10px;
        border: 1px solid #ccc;
        color: #444;
        font-size: 14px;
        text-decoration: none;
    }
    .friends-request a:hover,
    .btn-detail:hover {
        background: rgb(226, 224, 224);
    }
    .btn-detail:nth-child(2) {
        position: relative;
        left: 16px;
    }
    .btn-detail:nth-child(3) {
        position: relative;
        left: 4px;
    }
}



</style>