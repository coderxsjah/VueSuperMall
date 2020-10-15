<template>
  <div class="back-top" @click="backToTop">
    <img src="../../../assets/images/common/top.png">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods:{
      backToTop(){
        this.$emit("backtotop");
      }
    }
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
  img{
    width: 44px;
    height: 44px;
  }
</style>
