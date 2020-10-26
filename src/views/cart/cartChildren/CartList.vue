<template>
  <div>
    <cart-list-item v-for="item in cartlist" :product="item"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    components: {CartListItem},
    props:{
      cartlist:{
        type:Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>

</style>
