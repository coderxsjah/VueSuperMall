<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="showImg" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price" v-if="goodsItem.price">￥ {{goodsItem.price}}</span>
      <span class="collect" v-if="goodsItem.cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    computed:{
      showImg(){
        return  this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      //监听图片的加载
      imageLoad(){
        this.$bus.emit("itemImageLoad")
        //console.log("图片加载完成！");
      },
      //跳转到详情页
      goodsItemClick(){

        //console.log(this.goodsItem)
        this.$router.push('/detail/' + this.goodsItem.iid);
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>
