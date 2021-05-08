<template>
    <div class="goBack">
        <a href="/" class="backMain">登录成功，返回主页</a>
    </div>
</template>

<script>
export default {
   created () {
       
       let url = window.location.href;
       let setToken = url.split("&")[0].split("?")[1].split("=")[1];
       let githubToken = url.split("&")[1].split("=")[1];

       window.localStorage.setItem('Token', setToken.toString());
    //    let setTokenUrl = window.localStorage.getItem('Token');
       window.localStorage.setItem('githubToken', githubToken.toString());
    //    let githubTokenUrl = window.localStorage.getItem('githubToken');
   }
}
</script>

<style lang="scss" scoped>
.backMain {
    font-size: 18px;
    width: 100%;
    
    &:hover {
        color: #666;
    }
}
</style>