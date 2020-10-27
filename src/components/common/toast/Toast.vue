<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message:{
        type:String,
        default(){
          return "";
        }
      },
      show:{
        type: Boolean,
        default() {
          return false;
        }
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    color: white;
    padding: 10px;
    background-color: rgba(0,0,0,0.5);
  }
</style>
