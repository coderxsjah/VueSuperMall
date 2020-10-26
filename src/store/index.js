import { createStore } from 'vuex'
import mutations from "./mutations";
import actions from "./actions";

const state = {
  cartList: [],//商品列表
}
export default createStore({
  state,
  mutations ,
  actions,
  modules: {
  }
})
