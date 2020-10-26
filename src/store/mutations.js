export default {
  //商品数量添加
  addCounter(state,payload){
    payload.number += 1;
  },
  //列表中添加新商品
  addNewProduct(state,payload){
    payload.number = 1
    state.cartList.push(payload);
  },
}
