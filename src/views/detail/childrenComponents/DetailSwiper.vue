<template>
  <Swiper class="detail-swiper">
    <Slide v-for="item in images">
      <img :src="item" @load="swiperImageLoad">
    </Slide>
  </Swiper>
</template>

<script>
  import Swiper from "../../../components/common/swiper/Swiper";
  import Slide from "../../../components/common/swiper/SwiperItem";
  export default {
    name: "DetailSwiper",
    data(){
      return {
        isload:false,//轮播图图片是否加载完成
      }
    },
    components: {Slide, Swiper},
    props:{
      images:{ //轮播图图片数组
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      swiperImageLoad(){
        if(!this.isload){
          this.$emit("swiperImageLoad");
          this.isload = true;
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper{
    height: 200px;
    overflow: hidden;
  }
  img{
    width: 100%;
  }
</style>
