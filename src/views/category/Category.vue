<template>
  <div id="category">
<!--    导航区-->
    <NavBar class="category-nav">
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </NavBar>
<!--    内容区-->
    <div class="category-main">
<!--      侧边导航栏-->
      <div class="left-nav">
        <Scroll class="left-content" ref="leftNavRef" :probe-type="3" >
         <CategorySideNav :cate-list="cateList" @selectItem="selectItem"/>
        </Scroll>
      </div>
<!--      商品内容-->
      <div class="right-goods">
        <Scroll class="right-content" ref="rightContentRef" :probe-type="3">
          <GoodsList :goods="subList"/>
        </Scroll>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCategory, getSubcategory} from "../../network/category";
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import CategorySideNav from "./categoryChildren/CategorySideNav";
  import GoodsList from "../../components/content/goods/GoodsList";

  export default {
    name: "Category",
    components: {
      GoodsList,
      CategorySideNav,
      Scroll,
      NavBar
    },
    data(){
      return {
        cateList:[],//分类数据
        subList:[],//当前分类的子分类数据
      }
    },
    created() {
      this._getCategory();
      setTimeout(()=>{
        this._getSubCategory(0);
      },300)

    },
    updated() {
      this.$refs.leftNavRef.refresh();
      this.$refs.rightContentRef.refresh();
    },
    methods:{
      //获取分类数据
      _getCategory(){
        getCategory().then(res => {
          //console.log(res);
          this.cateList = res.data.category.list;
        })
      },
      //获取当前类别的子分类
      _getSubCategory(index){
        const maitKey = this.cateList[index].maitKey;
        getSubcategory(maitKey).then(res => {
          //console.log(res);
          this.subList = res.data.list;
        })
      },
      //点击切换内容
      selectItem(index){
        // console.log(index);
        this._getSubCategory(index);
        this.$refs.rightContentRef.scrollTo(0,0,0);
      }
    }
  }
</script>

<style scoped>
 #category{
   /*overflow-y: scroll;*/
 }
  .category-nav{
    background-color: #ff5777;
    color: #eee;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .category-main{
    display: flex;
    margin-top: 44px;

  }
  .left-nav{
    flex: 1;
    background-color: #ddd;
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
  .right-goods{
    flex: 3;
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
  .left-content,.right-content{
    height: calc(100vh - 44px - 49px);
  }
</style>
