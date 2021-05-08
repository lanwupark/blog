<template>
    <div class="album-box">
        <div id="nav">
            <!-- 顶部公共组件 -->
            <Top></Top>
        </div>
        <div class="center-box">
            <!-- 相册 -->
            <div class="backMain" @click="goback">返回首页>></div>
            <span class="backMain createAlbum" @click="createAlbum">创建相册>></span>
            <div class="album-page">
                <div class="album-content">
                    <div class="album-title">相册详情</div>
                    <!-- 相册列表 -->
                    <div class="picList">
                        <div
                            v-for="(item, index) in picSrc"
                            :key="index"
                            class="picItem"
                            >
                            <img
                                :name="item"
                                class="albumInfo"
                                :src="getImageURL(item.Name)"
                            >
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
<script type="text/javascript" src=""></script>
<script>
import Top from "@/components/Top.vue";
import Person from "@/components/Person.vue";
import Friends from "@/components/Friends.vue";
import Bottom from "@/components/Bottom.vue";
export default {
    components: {
        Person,
        Friends,
        Bottom,
        Top,
    },
    data() {
        return {
            picSrc: [],
            albumHead: 'http://139.198.187.220:8080/images/',
            // albumPic: [],
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
        getImageURL(item){
           return `${this.albumHead}/${item}`
       },
    },
    created() {
        // ${this.$route.params.albumID}
        let that = this;
        that.$http.get(`/album/detail/${that.$route.params.albumID}`).then((res) =>{
            that.picSrc = res.data.Result.Photos;
            console.log(311, that.picSrc);
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
        margin: 20px 30px 0 39px;
    }

    .picList {
        width: 1700px;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>