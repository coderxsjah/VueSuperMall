<template>
  <div id="home">
<!--    首页导航栏-->
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>
    <Scroll class="content" :probe-type="3" ref="homeScroll"
            @contentPosition="currentPosition" @pullUpMore="pullUpMore">
      <!--    轮播图-->
      <HomeSwiper :banners="banners"/>
      <!--    推荐-->
      <HomeRecommondView :recommends="recommends"/>
      <!--    本周流行-->
      <HomeFeatureView/>
      <!--    控制tab-->
      <TabControl class="home-tab-control" :titles="titles" @itemClick="tabItemClick"/>
      <!--    商品列表-->
      <GoodsList :goods="goods[currentType].list"/>
    </Scroll>
    <BackTop @backtotop="backToTop" v-show="showBackTop"/>
  </div>
</template>

<script>
  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  import HomeSwiper from "./childrenComponents/HomeSwiper";
  import HomeRecommondView from "./childrenComponents/HomeRecommondView";
  import HomeFeatureView from "./childrenComponents/HomeFeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";
  export default {
    name: "Home",
    data(){
      return {
        banners:[],//轮播图数据
        recommends:[],//推荐列表数据
        titles:["流行",'新款','精选'],//tabcontrol标题
        goods:{//存放首页获取到的数据
          'pop': {page:0,list:[]},
          'new': {page:0,list:[]},
          'sell': {page:0,list:[]},
        },
        currentType:'pop',//当前显示商品列表类型
        showBackTop:false,//显示回到顶部按钮
      }
    },
    components: {
      BackTop,
      Scroll,
      GoodsList,
      TabControl,
      HomeFeatureView,
      HomeRecommondView,
      HomeSwiper,
      NavBar
    },
    created() {
      //1.获取首页轮播图数据和推荐数据
      this.getHomeMultidata();
      //2.获取商品列表数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
      //获取首页轮播图数据和推荐数据
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          //console.log(res);
          this.banners = res.data.banner.list;
          this.recommends  = res.data.recommend.list;
        });
      },
      //获取首页商品列表数据
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          //console.log(res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          //console.log(this.goods[type].list)
        })
      },
      //tabControl的点击，切换商品列表
      tabItemClick(index){
        switch (index) {
          case 0:this.currentType = 'pop';break;
          case 1:this.currentType = 'new';break;
          case 2:this.currentType = 'sell';break;
          default:break;
        }
      },
      //回到顶部
      backToTop(){
        this.$refs.homeScroll.scroll.scrollTo(0,0,500);
      },
      //显示回到顶部按钮
      currentPosition(position){
        //console.log(position);
        this.showBackTop = -position.y > 1000? true:false;
      },
      //上拉加载更多
      pullUpMore(){
        console.log("上拉加载更多");
        this.getHomeGoods(this.currentType);
        this.$refs.homeScroll.refresh();
        setTimeout(()=>{
          this.$refs.homeScroll.finishPullUp()
        },2000)
      }
    }

  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 9;
  }
  .home-tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content{
    height:calc(100% - 49px);
    overflow: hidden;
    /*margin-top: 44px;*/
  }

</style>
