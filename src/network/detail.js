import {request} from "./request";

//商品详细信息类
export class GoodsInfo {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}
//商品参数信息类
export class GoodsParam {
  constructor(info,rule) {
    this.image = info.images ? info.images[0]:'';
    this.infos = info.set;
    this.sizes = rule.tables[0];
  }
}

export function getDetail(iid) {
  return request({
    url: 'api/w6/detail',
    params:{
      iid
    }
  })
}

//获取推荐数据
export function getRecommend() {
  return request({
    url:"api/w6/recommend",
  })
}
