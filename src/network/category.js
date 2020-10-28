import {request} from "./request";

export function getCategory() {
  return request({
    url:"api/w6/category",
  })
}
export function getSubcategory(maitKey) {
  return request({
    url:"api/w6/subcategory",
    params:{
      maitKey,
    }
  })
}
export function getCategoryDetail(miniWallKey,type) {
  return request({
    url:"/subcategory/detail",
    params:{
      miniWallKey,
      type
    }
  })
}
