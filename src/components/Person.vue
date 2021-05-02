<template>
<!-- 右侧用户功能框 -->
    <div class="person-msg">
        <div class="person-top">
            <img src="@/assets/img/touxiang.png" alt="">
            <div class="person-info">
                <p class="info-name">eanson023</p>
                <p class="info-sign">i'm out ya</p>
            </div>
        </div>
        <div class="person-func">
            <router-link to="/album" class="btn-detail">我的相册</router-link>
            <router-link to="/collection" class="btn-detail">我的收藏</router-link>
            <router-link to="/person" class="btn-detail">我的文章</router-link>
            <router-link to="/write" class="btn-detail">撰写文章</router-link>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
.person-msg {
    margin-top: 40px;
    width: 320px;
    height: 280px;
    background: #fff;
    border: 2px solid #ccc;
}
.person-top,
.person-func {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 34px;
}

.person-top img {
    width: 115px;
    height: 115px;
}

.person-info {
    position: relative;
    top: 24px;
    right: 24px;
}
.info-name {
    font-size: 18px;
    font-weight: bold;
}
.info-sign {
    margin-top: 30px;
}
.person-func {
    padding-top: 10px;
}
.btn-detail {
    width: 60px;
    text-align: center;
    padding: 8px 14px;
    margin: 8px 18px 0 10px;
    border: 1px solid #ccc;
    color: #444;
    font-size: 14px;
    text-decoration: none;
}
.btn-detail:hover {
    background: rgb(226, 224, 224);
}
</style>