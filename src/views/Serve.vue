<template>
    <div>
        hh
    </div>
</template>

<script>
export default {
   created() {
       let url = window.location.href;
       console.log(url, 111);
       let setToken = url.split("&")[0].split("?")[1].split("=")[1];
       console.log(setToken);
       let githubToken = url.split("&")[1].split("=")[1];
       console.log(githubToken);

       window.localStorage.setItem('setToken', JSON.stringify(setToken));
       let setTokenUrl = window.localStorage.getItem('setToken');
       window.localStorage.setItem('githubToken', JSON.stringify(githubToken));
       let githubTokenUrl = window.localStorage.getItem('githubToken');
       console.log(setTokenUrl, githubTokenUrl);
   }
}
</script>

<style lang="scss" scoped>

</style>