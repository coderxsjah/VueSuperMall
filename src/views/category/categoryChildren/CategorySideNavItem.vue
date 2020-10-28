<template>
  <div class="item" @click="itemClick">
    <div class="title">{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "CategorySideNavItem",
    props:{
      item:{
        type:Object,
        default(){
          return {};
        }
      },
    },
    methods:{
      itemClick(){
        this.$emit("itemClick");
      }
    }
  }
</script>

<style scoped>
  .item{
    height: 40px;
    width: 100%;
    background-color: #ddd;
    text-align: center;
    align-items: center;
  }
  .title{
    padding-top: 15px;
  }
</style>
