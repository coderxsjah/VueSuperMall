<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img class="swiper-image" :src="item.image">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper"
  export default {
    name: "HomeSwiper",
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
    }
  }
</script>

<style scoped>
  .swiper-image{
    width: 100%;
  }
</style>
