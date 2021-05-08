<template>
    <div class="bottomBox">
        <div class="selectBtn">
            <router-link to="http://cishan.chinanpo.gov.cn/platform/login.html" class="btn-detail">关于</router-link>
            <router-link to="/feedBack" class="btn-detail">FeedBack</router-link>
            <router-link @click.native="go" to="" class="btn-detail">Github</router-link>
            <router-link @click.native="go" to="/" class="btn-detail">捐赠</router-link>
        </div>
        <p class="bottom-text">@2021 lanwupark blog 蓝雾苑博客</p>
        <p class="bottom-text">VEWSION v1.0.0 为了更好的体验，本站推荐使用Chrome或Firefox浏览器</p>
    </div>
</template>

<script>
    export default {
       methods: {
           go() {
               window.location.href = 'https://github.com/';
           },
       },
    }
</script>

<style lang="scss" scoped>
.bottomBox {
    width: 100%;
    height: 180px;
    background: #fff;
    box-sizing: border-box;
    padding: 40px 0 0 100px;
    border: 2px solid #ccc;
    z-index: 9;

    .selectBtn {
        display: flex;

        .btn-detail {
            width: 60px;
            text-align: center;
            padding: 2px 14px;
            margin-right: 30px;
            border: 1px solid #ccc;
            color: #444;
            font-size: 14px;
            text-decoration: none;
        }
        .btn-detail:hover {
            background: rgb(226, 224, 224);
        }
    }

    .bottom-text {
        color: #444;
        font-size: 12px;
        margin-top: 30px;
    }
}
</style>