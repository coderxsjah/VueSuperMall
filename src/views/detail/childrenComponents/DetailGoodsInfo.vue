<template>
  <div v-if="Object.keys(goodsInfo).length !==0" class="detail-goods-info">
    <div class="goods-detail-title">{{goodsInfo.title}}</div>
    <div class="goods-detail-price">
      <span class="goods-newprice">{{goodsInfo.newPrice}}</span>
      <span class="goods-oldprice">{{goodsInfo.oldPrice}}</span>
      <span class="goods-discount" :style="{backgroundColor:this.goodsInfo.discountBgColor}" >{{goodsInfo.discountDesc}}</span>
    </div>
    <div class="goodsinfo-other">
      <span >{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goodsInfo.services.length-1" :key="index" class="info-service-item">
        <img :src="goodsInfo.services[index-1].icon">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .goods-detail-title{
    font-family: "黑体";
    font-size: 16px;
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #efefef;
  }
  .goods-detail-price{
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #efefef;
  }
  .goods-newprice{
    color: #ff5777;
    font-size: 28px;
  }
  .goods-oldprice{
    font-size: 10px;
    margin-left: 15px;
    text-decoration-line: line-through;
  }
  .goods-discount{
    font-family: "楷体";
    color: white;
    margin-left: 15px;
    font-size: 24px;
    border-radius: 40%;
  }
  .goodsinfo-other{
    display: flex;
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #efefef;
  }
  .goodsinfo-other span{
    flex:1;
    color: #999999;
  }
  .info-service{
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #efefef;
  }
  .info-service img{
    height: 10px;
    width: 10px;
  }
  .info-service-item{
    flex: 1;
    padding-left: 10px;
  }
  img+span{
    padding-left: 3px;
  }

</style>
