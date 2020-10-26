<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="detail-shop-info">
    <div class="shop-title">
      <img :src="shopInfo.shopLogo" class="shop-logo">
      <div class="shop-name">{{shopInfo.name}}</div>
    </div>
    <div class="shop-detail">
      <div class="shop-data">
        <div class="shop-sells">
          <div>{{shopInfo.cSells}}</div>
          <div>总销量</div>
        </div>
        <div class="shop-goods">
          <div>{{shopInfo.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-score">
        <div v-for="item in shopInfo.score" class="score-item">
          <span class="item-name">{{item.name}}</span>
          <span :class="['item-score',item.isBetter? 'isBetter':'']">{{item.score}}</span>
          <span :class="['item-level',item.isBetter? 'isBetter':'']">{{item.isBetter? "高":"低"}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .shop-title{
    margin: 5px;
    display: flex;
  }
  .shop-logo{
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
  .shop-name{
    color: #999999;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 8px;
  }
  .shop-detail{
    display: flex;
    font-family: "黑体";
  }
  .shop-data{
    flex: 1;
    display: flex;
    text-align: center;
    padding-top: 20px;
  }
  .shop-goods{
    flex: 1;
  }
  .shop-sells{
    flex: 1;
  }
  .shop-score{
    flex: 1;
  }
  .score-item{
    padding-bottom: 10px;
    display: flex;
  }
  .item-name{
    flex: 2;
  }
  .item-score,.item-level{
    flex: 1;
    color: green;
  }
  .isBetter{
    color: darkorange;
  }
</style>
