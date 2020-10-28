<template>
  <div class="category-side-nav">
    <category-side-nav-item v-for="(item,index) in cateList"
                            :item="item" :key="item.maitKey"
                            :class="{'selected':currentIndex==index}"
                            @itemClick="select(index)"/>
  </div>
</template>

<script>
  import CategorySideNavItem from "./CategorySideNavItem";
  export default {
    name: "CategorySideNav",
    props:{
      cateList:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
        currentIndex:0,//记录当前item
      }
    },
    components: {
      CategorySideNavItem
    },
    methods:{
      //选中某个item
      select(index){
        this.currentIndex = index;
        this.$emit("selectItem",index)
      }
    }
  }
</script>

<style scoped>
  .selected{
    border-left: solid 2px var(--color-high-text);
    color: var(--color-high-text);
  }
</style>
