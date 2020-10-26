<template>
  <div class="bottom-menu" >
    <input type="checkbox" :checked="isSelectAll" @change="checkBtnClick">
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <div class="buy-product" @click="calculate">去计算({{selectedCount}})</div>
  </div>
</template>

<script>
  //import CheckButton from './CheckButton'
  //import Toast from "../../../components/common/toast/Toast";

  export default {
    name: "CartBottomBar",
    components: {
      //CheckButton
    },
    computed: {
      totalPrice() {
        const cartList = this.$store.state.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.number * item.price
        }, 0).toFixed(2)
      },
      isSelectAll: function () {
        return this.$store.state.cartList.find(item => item.checked === false) === undefined;
      },
      //选中商品数量
      selectedCount(){
        const cartList = this.$store.state.cartList;
        let count = 0;
        for(let item of cartList){
          if(item.checked){
            count ++;
          }
        }
        return count
      }
    },
    methods: {
      //全选
      checkBtnClick: function () {
        // 1.判断是否有未选中的按钮
        let isSelectAll = this.$store.state.cartList.find(item => !item.checked);

        // 2.有未选中的内容, 则全部选中
        if (isSelectAll) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
        }
      },
      //结算
      calculate(){
        if(this.$store.state.cartList.length===0){
          //this.$toast.show("还未选购商品！");
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
