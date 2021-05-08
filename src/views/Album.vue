<template>
    <div class="album-box">
        <div id="nav">
            <!-- 顶部公共组件 -->
            <Top></Top>
        </div>
        <div class="center-box">
            <!-- 相册 -->
            <div class="backMain" @click="goback">返回首页>></div>
            <span class="backMain myAlbum" @click="myAlbum">我的相册>></span>
            <div class="album-page">
                <div class="album-content">
                    <!-- <span class="album-edit">编辑</span>s -->
                    <!-- 相册名 -->
                    <div class="album-title"><input type="text" placeholder="请输入相册名" ref="getTitle"></div>
                    <!-- 相册tip -->
                    <div class="album-tip">
                        <span>地点：<input type="text" ref="getAddress"></span>
                        <!-- <span>发布时间：{{item.releaseTime}}</span> -->
                    </div>
                    <textarea class="album-desc" ref="getDesc" placeholder="请输入相册描述"></textarea>
                    <!-- <div class="image-items">
                        <div class="image-item" v-for="(item, index) in personImage" :key="index">
                            <img :src="item.src" alt="">
                            <div class="image-detail">
                                <span>相册{{item.id}}</span>
                                <span>{{item.time}}</span>
                            </div>
                        </div>
                    </div> -->
                    <!-- 上传图片 -->
                    <el-upload
                        class="upload-pic"
                        drag
                        action
                        multiple
                        show-file-list = 'true'
                        :http-request="selectPicUpload"
                        :on-change="uploadPic"
                        ref="upload">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                    <el-button type="primary" @click="onSubmit" class="createBtn">立即创建</el-button>
                    <el-button type="primary" @click="cancleBtn" class="cancleBtn">取消</el-button>
                </div>
            </div>
            <!-- 头侧用户和好友列表 -->
            <div class="right">
                <Person></Person>
                <!-- <Friends></Friends> -->
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
import Top from "@/components/Top.vue";
export default {
    components: {
        Person,
        Friends,
        Bottom,
        Top,
    },
    data() {
        return {
            album: {},
                // {
                //     title: '风景',
                //     address: '重庆',
                //     releaseTime: '2020-12-18',
                //     desc: '重庆是一座地形地貌独特的山水城市。远看是山,近看是城,城在山上,山在城中,所以也叫“山城”',
                // }
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
            srcName: '',
            albumId: '',
            fileName: [],
        }
    },
    methods: {
        // 返回主页
        goback() {
            this.$router.push('/')
        },
        myAlbum() {
            this.$router.push('/myAlbum')
        },
        // 我的相册
        uploadPic(file, fileList) {
            console.log(file, 100);
            this.srcName = file.name
        },
        // 上传图片
        selectPicUpload (obj) {
            // let fd = new FormData();
            // fd.append("file", obj.file);
            // 请求
            let that = this;
            // 图片
            that.$http.post(`/album/photo/${that.albumId}/${that.srcName}`,obj.file).then((res) =>{
                console.log(333, res.data); 
                that.fileName.push(res.data.Result.FileName);
                console.log(that.fileName, 88);
                that.onSubmit();
            }).catch(e=>e)
        },
        // 创建相册
        onSubmit() {
            // 请求
            let that = this;
            // 相册
            // console.log(55, that.albumId, that.$refs.getTitle.value, that.$refs.getAddress.value, that.fileName);
            that.$http.post('/album',{
                AlbumID: that.albumId,
                Title: that.$refs.getTitle.value,
                Description: that.$refs.getDesc.value,
                Location: that.$refs.getAddress.value,
                PhotoList: that.fileName,
            }).then((res) =>{
                this.$router.go(0);
            // }).catch(e=>e)
            }).catch(e=>e)
        },
        // 取消创建
        cancleBtn() {
            // 请求
            let that = this;
            that.$http.delete(`/album/cancel/${that.albumId}`).then((res) =>{
                that.$refs.getTitle.value = '';
                that.$refs.getDesc.value = '';
                that.$refs.getAddress.value = '';
                that.$refs.upload.clearFiles();
            }).catch(e=>e)
        },

    },
    created() {
        // 请求
        let that = this;
        that.$http.get('/common/generate_id').then((res) =>{
            console.log(222, res.data);
            that.albumId = res.data.Result;
        }).catch(e=>e)
    },
};
</script>

<style lang="scss" scoped>
.album-box{
    position: relative;
    background:#eee;
    .center-box {
        height: 1080px;
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
        .myAlbum {
            position: relative;
            left: 160px;
            top: -20px;
        }
    }
    .bottom {
        width: 100%;
        position: absolute;
        top: 1080px;
        left: 0;
    }
}
.album-page {
    width: calc(100% - 490px);
    background: #fff;
    border: 2px solid #ccc;
    height: 880px;
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

        input {
            width: 60px;
            height: 30px;
            border: none;
            border-bottom: 1px solid #bbb;
        }
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
        margin: 50px 480px;
    }

    /deep/ .createBtn {
        position: relative;
        left: 500px;
    }

    /deep/ .cancleBtn {
        width: 98px;
        position: relative;
        left: 600px;
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