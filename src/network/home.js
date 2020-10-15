import {request} from "./request";
//获取首页的轮播图数据
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
//获取首页的商品列表数据
export function getHomeGoods(type,page) {
  return request({
    url:"api/w6/home/data",
    params:{
      type,
      page
    }
  })
}
