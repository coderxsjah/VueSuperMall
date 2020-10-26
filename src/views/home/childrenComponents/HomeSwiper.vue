<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img class="swiper-image" :src="item.image" @load="swiperImageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper"
  export default {
    name: "HomeSwiper",
    data(){
      return {
        isLoad:false,//是否加载了轮播图
      }
    },
    props:{
      banners:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    components:{
      SwiperItem,
      Swiper,
    },
    methods:{
      //轮播图的加载完成
      swiperImageLoad(){
        if(!this.isLoad){
          this.isLoad = true;
          this.$emit("swiperImageLoad")
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-image{
    width: 100%;
  }
</style>
