<template>
    <div class="album-box">
        <div class="center-box">
            <!-- 相册 -->
            <div class="album-page">
                <div class="album-content" v-for="(item, index) in album" :key="index">
                    <span class="album-edit">编辑</span>
                    <!-- 相册名 -->
                    <div class="album-title">{{item.title}}</div>
                    <!-- 相册tip -->
                    <div class="album-tip">
                        <span>地点：{{item.address}}</span>
                        <span>发布时间：{{item.releaseTime}}</span>
                    </div>
                    <textarea class="album-desc" v-model="item.desc"></textarea>
                    <div class="image-items">
                        <div class="image-item" v-for="(item, index) in personImage" :key="index">
                            <img :src="item.src" alt="">
                            <div class="image-detail">
                                <span>相册{{item.id}}</span>
                                <span>{{item.time}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- 上传图片 -->
                    <el-upload
                        class="upload-pic"
                        drag
                        action="http://localhost:8080/album"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
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
            album: [
                {
                    title: '风景',
                    address: '重庆',
                    releaseTime: '2020-12-18',
                    desc: '重庆是一座地形地貌独特的山水城市。远看是山,近看是城,城在山上,山在城中,所以也叫“山城”',
                }
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
        }
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
    }
    .album-edit {
        color: #333;
        width: 80px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border: 1px solid #555;
        position: absolute;
        right: 120px;
        &:hover {
            cursor: pointer;
        }
    }

    .album-tip {
        display: flex;
        justify-content: space-between;
        margin: 0 120px;
    }

    .album-desc {
        resize: none;
        width: calc(100% - 200px);
        margin: 40px 60px;
        padding: 0 40px;
        height: 150px;
        line-height: 150px;
        border: 1px solid #888;
        font-size: 16px;
        color: #333;
    }

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

    
    /deep/ .upload-pic{
        width: 400px;
        height: 200px;
        margin: 100px 480px;
    }
    

        // .submit {
        //     color: #fff;
        //     width: 80px;
        //     height: 36px;
        //     background: #333;
        //     line-height: 36px;
        //     text-align: center;
        //     position: absolute;
        //     right: 58px;
        //     top: 238px;

        //     &:hover {
        //         background: #555;
        //         cursor: pointer;
        //     }
        // }
}
</style>