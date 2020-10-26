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
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <!--    推荐-->
      <HomeRecommondView :recommends="recommends"/>
      <!--    本周流行-->
      <HomeFeatureView/>
      <!--    控制tab-->
      <TabControl v-show="!topFix" ref="homeTabControl"
                  :titles="titles" @itemClick="tabItemClick" :current-index="currentIndex"/>
      <!--    商品列表-->
      <GoodsList :goods="goods[currentType].list"/>
    </Scroll>
<!--    固定时的tabControl-->
    <TabControl v-show="topFix" class="fix-tab-control"  ref="homeTabControlFix"
                :titles="titles" @itemClick="tabItemClick" :current-index="currentIndex"/>
<!--    回到顶部-->
    <BackTop @backtotop="backToTop" v-show="showBackTop"/>
  </div>
</template>

<script>
  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import {debounce} from "../../network/util";

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
        topFix:false,//是否吸顶
        tapOffTop:0,//tabControl距离顶部的作用
        currentIndex:0,//tabControl的点击位置
        saveY:0,//记录离开时的当前页面位置
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
    mounted() {
      //3.监听图片加载完成
      const refresh = debounce(this.$refs.homeScroll.refresh,300)
      this.$bus.on("itemImageLoad",()=>{
        //console.log("home:图片加载完成");
        refresh();
      })
    },
    activated() {
      //重新进入页面时，迅速滚动到的离开时的位置
      //console.log(this.saveY);
      this.$refs.homeScroll.refresh();
      this.$refs.homeScroll.scrollTo(0, this.saveY, 0);
    },
    deactivated() {
      //保存当前离开时的位置
      this.saveY = this.$refs.homeScroll.getScrollY();
      //console.log(this.saveY);
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
        this.currentIndex = index;
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
      //追踪当前位置
      currentPosition(position){
        //console.log(position);
        //根据当前位置决定是否显示回到顶部组件
        this.showBackTop = -position.y > 1000? true:false;
        //根据当前位置决定是否吸顶
        this.topFix = -position.y > this.tapOffTop - 44 ? true:false;
      },
      //上拉加载更多
      pullUpMore(){
        console.log("上拉加载更多");
        this.getHomeGoods(this.currentType);
        this.$refs.homeScroll.refresh();
        setTimeout(()=>{
          this.$refs.homeScroll.finishPullUp()
        },2000)
      },
      //轮播图加载完成
      swiperImageLoad(){
        //console.log("轮播图加载完成");
        //获取tabControl距离顶部的位置
        this.tapOffTop = this.$refs.homeTabControl.$el.offsetTop;
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
  /*.home-tab-control{*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*  z-index: 9;*/
  /*}*/
  .fix-tab-control{
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
  .content{
    height:calc(100% - 49px);
    overflow: hidden;
    /*margin-top: 44px;*/
  }

</style>
