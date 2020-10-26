<template>
  <NavBar class="detail-nav">
    <template v-slot:left>
      <img src="../../../assets/images/common/back.svg" @click="backClick">
    </template>
    <template v-slot:center>
      <div class="nav-center">
        <div class="nav-item" :class="index===currentIndex ? 'red':''" @click="itemClick(index)"
             v-for="(item,index) in titles" :key="index">{{item}}</div>
      </div>
    </template>
  </NavBar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNav",
    data(){
      return{
        currentIndex:0,//当前位置选项
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    components:{
      NavBar,
    },
    methods:{
      //返回上一页面
      backClick(){
        this.$router.back();
      },
      //选项点击
      itemClick(index){
        this.currentIndex = index;
        this.$emit("detailItemClick",index);
      }
    }
  }
</script>

<style scoped>
  .detail-nav img{
    margin-top: 10px;
  }
  .nav-center{
    display: flex;
  }
  .nav-item{
    flex: 1;
  }
  .red{
    color: #ff8198;
  }
</style>
