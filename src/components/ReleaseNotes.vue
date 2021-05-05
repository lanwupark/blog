<template>
<!-- 右侧发布说明 -->
    <div class="release-notes">
        <div class="notes-top">
            <img src="@/assets/img/releaseNotes.png" alt="">
            <span class="notes-title">发布文章说明</span>
        </div>
        <div class="notes-items">
            <ul v-for="item in releaseNotes" :key="item" class="notes-item">
                <li>{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                releaseNotes: [
                    '支持MarkDown格式,**粗体**,~~删除线~~,`单行代码`',
                    'http://example.org自动加链接',
                    '代码支持高亮,如: ```go func main(){}```则是Go语法高亮',
                    '@name会链接到用户页面,并会通知他',
                    '![alt文本](http://foo.com/bar.jpg)显示图片',
                    ':smile:支持emoji表情,见Emoji cheat sheet',
                    '完整MarkDown语法说明:语法说明(简体中文版)',
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
.release-notes {
    margin-top: -12px;
    padding: 20px;
    width: 320px;
    height: 350px;
    background: #fff;
    border: 2px solid #ccc;
    color: #777;

    .notes-top {
        position: relative;
        img {
            width: 35px;
            height: 35px;
        }
        span {
            position: absolute;
            top: 8px;
            font-size: 17px;
            font-weight: bold;
            color: #444;
        }
    }
    .notes-item {
        padding: 4px 8px 4px 20px;
    }
}

</style>