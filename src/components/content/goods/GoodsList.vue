<template>
  <div class="goods-list">
    <goods-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";
  export default {
    name: "GoodsList",
    components: {GoodsItem},
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
