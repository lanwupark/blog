<template>
    <div class="feedBack-box">
        <div id="nav">
            <!-- 顶部公共组件 -->
            <Top></Top>
        </div>
        <div class="center-box">
            <!-- 反馈 -->
            <div class="backMain" @click="goback">返回首页>></div>
            <div class="feedBack-page">
               <p class="feedBack-title">请阐述你想反映的问题或建议，我们将看到反馈后第一时间回复您</p>
               <div class="question-title">问题</div>
               <textarea class="question-desc" v-model="feedbackDesc"></textarea>
               <div class="contact-info">
                    <el-input placeholder="请输入您的联系方式" v-model="contactInfo" class="contact-detail" clearable>
                        <el-select v-model="contactOption" slot="prepend" placeholder="请选择" class="contact-option">
                            <el-option label="联系电话" value="1"></el-option>
                            <el-option label="微信" value="2"></el-option>
                            <el-option label="QQ" value="3"></el-option>
                        </el-select>
                    </el-input>
                </div>
                <div class="feedBack-submit" @click="submit">提交</div>
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
            contactInfo: '',
            contactOption: '',
            feedBack: [
               
            ],
            feedbackDesc: '',
            
        }
    },
    methods: {
        // 返回主页
        goback() {
            this.$router.push('/oauth/token')
        },
        submit() {
            let that = this;
            that.$http.post('/feedback', {
                Description: that.feedbackDesc,
                Contact: that.contactInfo,
            }).then((res) =>{
                console.log(res, 6);
            }).catch(e=>e)
        }
    }
    
};
</script>

<style lang="scss" scoped>
.feedBack-box{
    position: relative;
    background:#eee;
    .center-box {
        height: 1000px;
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
    }
    .bottom {
        width: 100%;
        position: absolute;
        top: 980px;
        left: 0;
    }
}
.feedBack-page {
    width: calc(100% - 490px);
    background: #fff;
    border: 2px solid #ccc;
    height: 780px;
    position: absolute;
    top: 20px;
    left: 55px;

    .feedBack-title {
        margin: 50px 0 0 300px;
    }

    .question-title {
        margin: 30px 0 0 300px;
    }

    .question-desc {
        resize: none;
        margin: 14px 0 0 300px;
        width: 800px;
        height: 260px;
        border: 1px solid #888;
        font-size: 16px;
        color: #333;
        padding: 14px;
    }
    .contact-info {
        width: 800px;
        margin: 60px auto;

        .contact-option {
            width: 110px;
        }
    }
    .feedBack-submit {
        color: #fff;
        width: 200px;
        height: 36px;
        background: #333;
        line-height: 36px;
        text-align: center;
        position: absolute;
        left: 615px;
        &:hover {
            background: #555;
            cursor: pointer;
        }
    }
}

.contact-detail {
    position: relative;
    left: -98px;
}



</style>