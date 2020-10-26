<template>
  <div class="cart-list-item">
    <div class="item-left">
      <input type="checkbox" :checked="product.checked" @change="choose"/>
    </div>
    <div class="item-center">
      <img :src="product.image">
    </div>
    <div class="item-right">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">
        <div class="item-price">￥ {{product.price}}</div>
        <div class="item-num">X {{product.number}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props:{
      product:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    methods:{
      //切换商品被选中的状态
      choose(){
        let prd = this.$store.state.cartList.find(item => item.iid===this.product.iid)
        prd.checked = !prd.checked;
      }
    }
  }
</script>

<style scoped>
  .cart-list-item{
    display: flex;
    padding: 3px;
    align-items: center;
    border-bottom: 1px solid #999999;
    height: 100px;
  }
  .item-left{
    flex: 1;
  }
  .item-center{
    flex: 8;
    height: 90px;
    border-radius: 5%;
    overflow: hidden;
  }
  .item-center img{
    width: 100%;
  }
  .item-right{
    margin-left: 5px;
    flex: 10;
    align-items: center;
  }
  .item-title{
    font-size: 14px;
  }
  .item-desc{
    display: flex;
  }
  .item-price{
    flex: 1;
    text-align: left;
    color: #ff5777;
  }
  .item-num {
    flex: 1;
    text-align: right;
    font-size: 14px;
  }

</style>
