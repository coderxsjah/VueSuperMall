<template>
  <div id="cart">
<!--    导航栏-->
    <nav-bar class="cart-nav">
      <template v-slot:center>
        <div>购物车({{productNum}})</div>
      </template>
    </nav-bar>
<!--    滚动区-->
    <Scroll class="content" ref="cartScrollRef" :probe-type="3">
      <CartList :cartlist="cartList"/>
    </Scroll>
    <CartBottomBar/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import CartList from "./cartChildren/CartList";
  import CartBottomBar from "./cartChildren/CartBottomBar";

  export default {
    name: "Cart",
    components: {
      CartList,
      Scroll,
      NavBar,
      CartBottomBar,
    },
    updated() {
      //刷新滚动区间的高度
      this.$refs.cartScrollRef.refresh();
    },
    computed:{
      //商品数量
      productNum(){
        return this.$store.state.cartList.length;
      },
      //购物车中商品列表
      cartList(){
        return this.$store.state.cartList;
      }
    }
  }
</script>

<style scoped>
  #cart{
    height: 100vh;
  }
  .cart-nav{
    background-color: #ff8198;
    color: #eee;
  }
  .content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
