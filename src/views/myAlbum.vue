<template>
    <div class="album-box">
        <div class="center-box">
            <!-- 相册 -->
            <div class="backMain" @click="goback">返回首页>></div>
            <span class="backMain createAlbum" @click="createAlbum">创建相册>></span>
            <div class="album-page">
                <div class="album-content">
                    <div class="album-title">我的相册</div>
                    <!-- 相册列表 -->
                    <img
                        v-for="(item, index) in albumInfo"
                        :key="index"
                        class="albumInfo"
                        :src="albumPic"
                    >
                    <!--  :src="item." alt=""
                        @click="albumDetail" -->
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
<script type="text/javascript" src=""></script>
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
            albumInfo: [],
            uuidName: '',
            albumPic: `/images/${this.uuidName}`,
        }
    },
    methods: {
        // 返回主页
        goback() {
            this.$router.push('/oauth/token')
        },
        createAlbum() {
            this.$router.push('/album')
        },
    },
    created() {
        let that = this;
        // 用户
        let userID = '';
        that.$http.get('/user').then((res) =>{
            console.log(res.data, 4);
            userID = res.data.UserID;
            // 相册
            that.$http.get(`/album/${userID}`).then((res) =>{
                console.log(res, 5);
                that.albumInfo = res.data.ResultList; 
                console.log(that.albumInfo, 8088);
                that.uuidName = that.albumInfo[0].CoverName;
                console.log(that.uuidName);
            }).catch(e=>e)
        }).catch(e=>e)
    },
    updated() {
        console.log(3123, this.uuidName);
        console.log(1112, `/images/${this.uuidName}`);
        this.$http.get(`/images/${this.uuidName}`).then((res) =>{
            console.log(6, res);
        }).catch(e=>e)
    },
};
</script>

<style lang="scss" scoped>
.album-box{
    position: relative;
    background:#eee;
    .center-box {
        height: 1200px;
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
        top: 1180px;
        left: 0;
    }
}
.album-page {
    width: calc(100% - 490px);
    background: #fff;
    border: 2px solid #ccc;
    height: 1080px;
    position: absolute;
    top: 40px;
    left: 55px;

    .album-title {
        text-align: center;
        margin: 30px 0;
        font-size: 24px;
        font-weight: bold;
        color: #555;

        input {
            font-size: 18px;
            width: 150px;
            height: 50px;
            border: none;
            border-bottom: 1px solid #bbb;
        }
    }

    .albumInfo {
        width: 200px;
        height: 200px;
    }
}
</style>