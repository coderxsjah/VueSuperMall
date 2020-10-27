export default  {
  //添加到购物车
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldProduct  = null;
      // for(let pd of state.cartList){
      //   if(pd.iid === payload.iid){
      //     oldProduct = pd;
      //   }
      // }
      oldProduct = context.state.cartList.find(item=>item.iid === payload.iid)
      if(oldProduct){
        context.commit("addCounter",oldProduct);
        resolve("此商品数量+1");
      }
      else{
        context.commit("addNewProduct",payload);
        resolve("将此商品添加到购物车！");
      }
    })
  }
}
