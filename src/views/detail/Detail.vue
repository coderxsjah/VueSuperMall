<template>
  <div id="detail">
    <DetailNav ref="detailNav" :titles="titles" @detailItemClick="detailItemClick"/>
    <Scroll class="content" :probe-type="3" ref="detailScroll"
            @contentPosition="currentPosition">
      <DetailSwiper :images="topImages" @swiperImageLoad="handleSwiperImageLoad"/>
      <DetailGoodsInfo :goods-info="goodsInfo"/>
      <DetailShopInfo :shop-info="shopInfo"/>
      <DetailParams ref="params" :params="goodsParams"/>
      <DetailComment ref="comment" :comment="comment"/>
      <GoodsList ref="recommend" :goods="recommends"/>
    </Scroll>
    <DetailBottomBar @addToCart="addToCart" @goToBuy="goToBuy"/>
  </div>
</template>

<script>

  import DetailNav from "./childrenComponents/DetailNav";

  import {getDetail, getRecommend, GoodsInfo, GoodsParam} from "../../network/detail";
  import DetailSwiper from "./childrenComponents/DetailSwiper";
  import DetailGoodsInfo from "./childrenComponents/DetailGoodsInfo";
  import DetailShopInfo from "./childrenComponents/DetailShopInfo";
  import Scroll from "../../components/common/scroll/Scroll";

  import {debounce} from "../../network/util";
  import DetailParams from "./childrenComponents/DetailParams";
  import DetailComment from "./childrenComponents/DetailComment";
  import GoodsList from "../../components/content/goods/GoodsList";
  import DetailBottomBar from "./childrenComponents/DetailBottomBar";

  export default {
    name: "Detail",
    components: {
      DetailBottomBar,
      GoodsList,
      DetailComment,
      DetailParams,
      Scroll,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailSwiper,
      DetailNav
    },
    data(){
      return{
        iid:null,//商品iid
        titles:["商品","参数","评论","推荐"],//导航栏选项
        topImages:[],//轮播图数据
        goodsInfo: {},//商品详细信息
        shopInfo:{},//商家信息
        goodsParams:{},//商品参数
        comment:{},//评论信息
        recommends:[],//推荐数据
        paramsTopOff:0,//参数距离顶部位置
        commentTopOff:0,//评论距离顶部位置
        recommendTopOff:0,//推荐距离顶部位置
      }
    },
    created() {
      //保存iid
      this.iid = this.$route.params.iid
      //console.log(this.iid);
      //获取详情数据并保存
      this.getDetail();
      //获取推荐数据
      this.getRecommend();
    },
    mounted() {
      const refresh = debounce(this.$refs.detailScroll.refresh,300)
      refresh();
    },

    methods:{
      //获取详情数据
      getDetail(){
        getDetail(this.iid).then(res => {
          const data = res.result;
          //保存轮播图信息
          this.topImages = data.itemInfo.topImages;
          //保存商品详细信息
          //console.log(data);
          this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns,data.shopInfo.services)
          //console.log(this.goodsInfo);
          //保存商店信息
          this.shopInfo = data.shopInfo;
          //保存商品参数信息
          this.goodsParams = new GoodsParam(data.itemParams.info,data.itemParams.rule);
          //保存评论信息
          if(data.rate.cRate !== 0){
            this.comment = data.rate.list[0];
          }
          //console.log(this.goodsParams);
        })
      },
      //获取推荐数据
      getRecommend(){
        getRecommend().then(res=>{
          console.log(res);
          this.recommends = res.data.list;
        })
      },
      //监听当前位置
      currentPosition(position){
        //根据当前位置更改title项
        if(position.y <= -this.recommendTopOff){
          this.$refs.detailNav.currentIndex = 3;
        }
        else if(position.y <= -this.commentTopOff){
          this.$refs.detailNav.currentIndex = 2;
        }
        else if(position.y <= -this.paramsTopOff){
          this.$refs.detailNav.currentIndex = 1;
        }
        else{
          this.$refs.detailNav.currentIndex = 0;
        }
      },
      //detailItem点击时，滚动到对应位置。
      detailItemClick(index){
        //console.log(typeof index);
        switch (index) {
          case 0:this.$refs.detailScroll.scrollTo(0,0);break;
          case 1:this.$refs.detailScroll.scrollTo(0,-this.paramsTopOff);break;
          case 2:this.$refs.detailScroll.scrollTo(0,-this.commentTopOff);break;
          case 3:this.$refs.detailScroll.scrollTo(0,-this.recommendTopOff);break;
          default:break;
        }
      },
      //获取各个组件的相应位置
      handleSwiperImageLoad(){
        this.paramsTopOff = this.$refs.params.$el.offsetTop - 44;
        this.commentTopOff = this.$refs.comment.$el.offsetTop - 44;
        this.recommendTopOff = this.$refs.recommend.$el.offsetTop - 44;
        // console.log(this.paramsTopOff);
        // console.log(this.commentTopOff);
        // console.log(this.recommendTopOff);
      },
      //添加到购物车
      addToCart() {
        //1.获取商品信息
        console.log("添加到购物车");
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goodsInfo.title;
        product.desc = this.goodsInfo.desc;
        product.price = this.goodsInfo.realPrice;
        product.iid = this.iid;
        this.$store.dispatch("addCart",product)
        console.log(this.$store.state.cartList);
      },
      //立即购买
      goToBuy(){
        console.log("立即购买");
        this.$router.push('/cart');
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 58px);
    overflow: hidden;
  }
</style>
