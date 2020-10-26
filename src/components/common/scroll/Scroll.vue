<template>
  <div class="scroll-wrapper" ref="scrollWrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default(){
          return 0;
        }
      }
    },
    data(){
      return {
        scroll:null,//保存BScroll实例
      }
    },
    mounted() {
      //创建BScroll对象
      this.scroll = new BScroll(this.$refs.scrollWrapper,{
        probeType:this.probeType,//监听实时位置
        click:true,//div可以点击
        pullUpLoad:true,//上拉加载更多
      })
      //监听实时位置
      this.scroll.on("scroll",(position)=>{
        this.$emit("contentPosition",position);
      })
      //监听上拉事件
      this.scroll.on("pullingUp",()=>{
        this.$emit("pullUpMore")
      });
    },
    methods:{
      //this.$scroll的使用避免了未挂载，先使用
      //封装scrollTo函数
      scrollTo(x,y,time=500){
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      //完成上拉加载
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      //刷新，重新计算可滚动高度。
      refresh(){
        console.log("------");
        this.scroll && this.scroll.refresh();
      },
      //获取离开时的位置
      getScrollY(){
        return this.scroll.y ? this.scroll.y : 0;
      }
    }
  }
</script>

<style scoped>

</style>
