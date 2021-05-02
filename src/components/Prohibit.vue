<template>
    <!-- 右侧禁止发布 -->
    <div class="prohibit-page">
        <div class="notes-top">
            <img src="@/assets/img/prohibit.png" alt="">
            <span class="notes-title">禁止发布</span>
        </div>
        <div class="notes-items">
            <ul v-for="(item, index) in prohibitNotes" :key="index" class="notes-item">
                <li>{{(index+1) + `. ` +item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                prohibitNotes: [
                    '违反法律法规的信息',
                    '不友善:不尊重用户及其所贡献内容的信息或行为',
                    '发布垃圾广告信息: 以推广曝光为目的,发布影响用户体验、扰乱知乎社区秩序的内容,或进行相关行为。',
                    '恶意行为:滥用产品功能,进行影响用户体验、危机平台安全及损害他人权益的行为。',
                    '色情低俗信息',
                    '不实信息',
                    '传播封建迷信',
                    '文章标题党',
                    '其他危害行为或内容',
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
.prohibit-page {
    margin: 30px 0;
    padding: 20px;
    width: 320px;
    height: 435px;
    background: #fff;
    font-size: 14px;
    border: 2px solid #ccc;

    .notes-top {
        position: relative;
        img {
            width: 35px;
            height: 35px;
        }
        span {
            position: absolute;
            top: 8px;
            left: 44px;
            font-size: 18px;
            font-weight: bold;
            color: #444;
        }
    }
    .notes-item {
        padding: 4px 8px 4px 2px;

        li {
            list-style: none;
            line-height: 24px;
            font-size: 17px;
            color: black;
        }
    } 
}



</style>