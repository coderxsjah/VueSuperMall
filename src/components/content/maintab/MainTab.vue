<template>
  <Tab>
    <TabItem link="/home">
      <template v-slot:icon>
        <img src="../../../assets/images/tabbar/home.svg" alt=""/>
      </template>
      <template v-slot:active-icon>
        <img src="../../../assets/images/tabbar/home_active.svg" alt=""/>
      </template>
      <template v-slot:text>
        <div slot="text">首页</div>
      </template>
    </TabItem>
    <TabItem link="/category">
      <template v-slot:icon>
        <img src="../../../assets/images/tabbar/category.svg" alt="">
      </template>
      <template v-slot:active-icon>
        <img src="../../../assets/images/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:text>
        <div >分类</div>
      </template>
    </TabItem>
    <TabItem link="/cart">
      <template v-slot:icon>
        <img src="../../../assets/images/tabbar/cart.svg" alt=""/>
      </template>
      <template v-slot:active-icon>
        <img src="../../../assets/images/tabbar/cart_active.svg" alt=""/>
      </template>
      <template v-slot:text>
        <div slot="text">购物车</div>
      </template>
    </TabItem>
    <TabItem link="/profile">
      <template v-slot:icon>
        <img src="../../../assets/images/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:active-icon>
        <img src="../../../assets/images/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:text>
        <div >我的</div>
      </template>
    </TabItem>
  </Tab>
</template>

<script>
  import Tab from "../../common/tab/Tab"
  import TabItem from "../../common/tab/TabItem";

  export default {
    name: "MainTab",
    components: {
      TabItem,
      Tab,
    },
  }
</script>

<style scoped>
  img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>
