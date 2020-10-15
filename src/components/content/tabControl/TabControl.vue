<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" @click="select(index)">
      <span :class="['item-span',currentIndex===index? 'active':'']">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
        currentIndex:0,//记录被选中的item
      }
    },
    methods:{
      select(index){
        this.currentIndex = index;
        this.$emit("itemClick",index);
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: white;
    z-index: 9;
  }
  .tab-control-item{
    flex: 1;
    height: 44px;
    line-height: 44px;
  }
  .active{
    color: #ff5777;
    border-bottom: 1px solid #ff5777;
  }
  .item-span{
    padding: 3px;
  }
</style>
